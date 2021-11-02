import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { useHome } from "./home";

export function useScreens() {
  const { Navigator, Screen } = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Navigator>
      <Screen name="Home" component={useHome} />
    </Navigator>
  );
}
