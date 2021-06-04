import { Navigator, Screen, useHome } from "./utils";

export function useScreens() {
  return (
    <Navigator>
      <Screen name="Home" component={useHome} />
    </Navigator>
  );
}
