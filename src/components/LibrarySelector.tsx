import { ButtonGroup } from "@rneui/base";
import React from "react";
import { SegmentedButtons } from "react-native-paper";
import useStore from "../store/rootStore";

const LibrarySelector = () => {
  const { uiLibrarySelected, setUiLibrarySelected } = useStore((state) => ({
    uiLibrarySelected: state.uiLibrarySelected,
    setUiLibrarySelected: state.setUiLibrarySelected,
  }));

  if (uiLibrarySelected === 1) {
    return (
      <ButtonGroup
        buttons={["Paper", "Elements"]}
        selectedIndex={uiLibrarySelected}
        onPress={(value) => {
          setUiLibrarySelected(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
    );
  }
  return (
    <>
      <SegmentedButtons
        value={uiLibrarySelected}
        onValueChange={setUiLibrarySelected}
        buttons={[
          {
            value: 0,
            label: "Paper",
          },
          {
            value: 1,
            label: "Elements",
          },
        ]}
        style={{ marginBottom: 20 }}
      />
    </>
  );
};

export default LibrarySelector;
