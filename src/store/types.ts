export type Pokemon = {
  name: string;
  image: string;
  url: string;
};
export interface RootStore {
  pokedex: Pokemon[];
  search: string;
  getPokemonImage: (pokemonId: number) => Promise<String>;
  setPokemonImage: (pokemons: any) => Promise<void>;
  getPokedex: () => Promise<void>;
  setSearch: (text: string) => void;
}
