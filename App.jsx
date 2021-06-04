import "react-native-gesture-handler";
import { StatusBar, NavigationContainer, Screens } from "./utils";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Screens />
    </NavigationContainer>
  );
}
