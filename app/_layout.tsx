import { LogBox, Stack } from "components";

LogBox.ignoreLogs(["Require cycle:"]);

const useLayout: Layout = () => <Stack initialRouteName="(home)/index" />;

export { ErrorBoundary } from "components";

export default useLayout;
