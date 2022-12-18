import { Home } from "components";
import { Navigator, Screen } from "./utils";

export default function useScreens() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
