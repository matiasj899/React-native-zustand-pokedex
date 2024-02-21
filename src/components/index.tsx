import { FlatList, View } from "react-native";
import useStore from "../store/rootStore";
import { useEffect } from "react";
import LibrarySelector from "./LibrarySelector";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Modal from "./Modal";

export function Pokedex() {
  const { pokedex, getPokedex, pokedexFiltered } = useStore((state) => ({
    pokedex: state.pokedex,
    getPokedex: state.getPokedex,

    pokedexFiltered: state.pokedex.filter((item) =>
      item.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
    ),
  }));

  useEffect(() => {
    if (!pokedex.length) {
      getPokedex();
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        width: "100%",
      }}
    >
      <LibrarySelector />
      <SearchBar />
      <FlatList
        style={{ width: "100%" }}
        data={pokedexFiltered}
        renderItem={({ item, index }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",

              flex: 1 / 2,
              marginTop: 20,
            }}
          >
            <Card
              image={item?.image}
              name={item?.name}
              number={index + 1}
              url={item.url}
            />
          </View>
        )}
        keyExtractor={(item) => item?.name}
        numColumns={2}
      />
      <Modal />
    </View>
  );
}
