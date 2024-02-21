import React from "react";
import useStore from "../store/rootStore";
import { Searchbar as SearchbarRNP } from "react-native-paper";
import { SearchBar as SearchbarRNE } from "@rneui/themed";

const SearchBar = () => {
  const { uiLibrarySelected, setSearch, search } = useStore((state) => ({
    uiLibrarySelected: state.uiLibrarySelected,
    search: state.search,
    setSearch: state.setSearch,
  }));

  if (uiLibrarySelected === 1) {
    return (
      <SearchbarRNE onChangeText={(text) => setSearch(text)} value={search} />
    );
  }
  return (
    <SearchbarRNP onChangeText={(text) => setSearch(text)} value={search} />
  );
};

export default SearchBar;
