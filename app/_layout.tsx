import "react-native-gesture-handler";
import { LogBox, Stack } from "components";

LogBox.ignoreLogs(["Require cycle:"]);

export default function useLayout() {
  return <Stack initialRouteName="(home)/index" />;
}

export { ErrorBoundary } from "components";
