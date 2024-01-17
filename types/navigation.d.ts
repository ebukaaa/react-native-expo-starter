type Stacks = "(home)" | "about";

interface StackParams extends Readonly<{ [stack in Stacks]: undefined }> {}

type RouteProp<T> = import("types").RouteProp<T, keyof T>;

interface Route extends Readonly<RouteProp<StackParams>> {}

interface Router extends Readonly<typeof import("expo-router").router> {}

interface Stack
  extends Readonly<
    import("types").NavigationProp<
      StackParams,
      keyof StackParams,
      undefined,
      Readonly<
        { [prop in "key" | "type"]: string } & {
          stale: false;
          index: number;
          routes: Route[];
          history?: unknown[];
          routeNames: (keyof StackParams)[];
        }
      >,
      import("types").NativeStackNavigationOptions
    >
  > {}
