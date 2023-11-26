interface Home
  extends FunctionComponent,
    Partial<
      Readonly<{ styles: { view: Style<ViewStyle>; title: Style<TextStyle> } }>
    > {}
