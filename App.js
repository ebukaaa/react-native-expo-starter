import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screens from "./screens";

const style = StyleSheet.create({ container: { flex: 1 } });

export default function App() {
  return (
    <GestureHandlerRootView style={style.container}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
