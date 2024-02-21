import { StyleSheet, Text, View } from "react-native";
import { Pokedex } from "./src/components";
import { PaperProvider, Portal } from "react-native-paper";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return (
    <PaperProvider>
      <Portal>
        <View style={styles.container}>
          <Pokedex />
        </View>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
