import type { NavigationProp } from "types";

interface StackParams {
  Home: undefined;
  About: undefined;
}

interface Stack
  extends NavigationProp<
    StackParams,
    keyof StackParams,
    undefined,
    Readonly<
      Record<"key" | "type", string> & {
        index: number;
        routeNames: (keyof StackParams)[];
        history?: unknown[];
        routes: import("types").RouteProp<StackParams, keyof StackParams>[];
        stale: false;
      }
    >,
    import("types").NativeStackNavigationOptions
  > {}
