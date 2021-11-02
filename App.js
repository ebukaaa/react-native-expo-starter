import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useScreens as Screens } from "./screens";

export default function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}
