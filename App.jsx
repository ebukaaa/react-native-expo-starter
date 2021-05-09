import "react-native-gesture-handler";
import { StatusBar, NavigationContainer, Navigator } from "./utils";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />

      <Navigator />
    </NavigationContainer>
  );
}
