interface Home
  extends FunctionComponent,
    Partial<
      Readonly<
        Pick<Stack, "setOptions"> & {
          eventListener: () => void;
          Google: typeof import("assets/svgs/google.svg").default;
          styles: { view: Style<ViewStyle>; title: Style<TextStyle> };
        }
      >
    > {}
