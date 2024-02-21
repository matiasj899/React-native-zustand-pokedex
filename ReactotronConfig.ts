import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import useStore, { storage } from "./src/store/rootStore";
import reactotronZustand from "reactotron-plugin-zustand";

Reactotron.configure({
  name: "React Native Demo",
})
  .useReactNative() // add all built-in react native plugins
  .use(mmkvPlugin({ storage }))
  .use(
    reactotronZustand({
      stores: [{ name: "app", zustand: useStore }],
    })
  ) // plus some custom made plugin.
  .connect();
