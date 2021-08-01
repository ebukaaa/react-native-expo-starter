import { useStore } from "./utils";

export function useScreens() {
  const {
    stack: { Navigator, Screen },
    useHome,
  } = useStore();

  return (
    <Navigator>
      <Screen name="Home" component={useHome} />
    </Navigator>
  );
}
