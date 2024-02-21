import { create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";
import { RootStore } from "./types";

export const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

const useStore = create<RootStore>()(
  persist(
    (set, get) => ({
      pokedex: [],
      search: "",
      getPokemonImage: async (pokemonId) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        const pokemonData = await response.json();
        return pokemonData?.sprites?.front_default;
      },
      setPokemonImage: async (pokemons) => {
        for await (const [key, pokemon] of pokemons?.results.entries()) {
          const result = await get().getPokemonImage(key + 1);
          if (result) {
            set((state) => ({
              pokedex: [...state.pokedex, { ...pokemon, image: result }],
            }));
          }
        }
      },
      getPokedex: async () => {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
        );
        const pokemons = await response.json();
        get().setPokemonImage(pokemons);
      },
      setSearch: (text) => {
        set(() => ({ search: text }));
      },
      uiLibrarySelected: 0,
      setUiLibrarySelected: (value) => {
        set(() => ({ uiLibrarySelected: value }));
      },
      modalVisible: false,
      openModal: () => {
        console.log("setModalVisible");
        set((state) => ({ modalVisible: true }));
      },
      closeModal: () => {
        console.log("setModalVisible");
        set((state) => ({ modalVisible: false }));
      },
    }),

    {
      name: "pokedex-store",
      storage: createJSONStorage(() => zustandStorage),
      onRehydrateStorage: (state) => {
        console.log("hydration starts", state);

        // optional
        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished", state);
          }
        };
      },
    }
  )
);

export default useStore;
