import { Navigator, Screen, useHome } from "./utils";

export function useNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={useHome} />
    </Navigator>
  );
}
