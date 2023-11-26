type Stacks = "(home)" | "about";

interface StackParams extends Record<Stacks, undefined> {}

type RouteProp<T> = import("types").RouteProp<T, keyof T>;

interface Route extends Readonly<RouteProp<StackParams>> {}

interface Stack
  extends Readonly<
    import("types").NavigationProp<
      StackParams,
      keyof StackParams,
      undefined,
      Readonly<
        Record<"key" | "type", string> & {
          index: number;
          routeNames: (keyof StackParams)[];
          history?: unknown[];
          routes: RouteProp<StackParams>[];
          stale: false;
        }
      >,
      import("types").NativeStackNavigationOptions
    >
  > {}
