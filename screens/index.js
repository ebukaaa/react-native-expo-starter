import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function useScreens() {
  return (
    <Navigator>
      <Screen component={Home} name="Home" />
    </Navigator>
  );
}
