import type { FunctionComponent, StyleProp } from "types";

interface Home
  extends FunctionComponent,
    Partial<
      Readonly<{
        styles: {
          view: StyleProp<import("types").ViewStyle>;
          title: StyleProp<import("types").TextStyle>;
          image: StyleProp<import("types").ImageStyle>;
        };
      }>
    > {}
