import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screens from "./screens";
import "./styles/app.scss";

export default function App() {
  return (
    <GestureHandlerRootView styleName="app">
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
