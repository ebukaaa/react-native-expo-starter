interface HTMLProps {
  children: import("types").ReactNode;
}

interface HTML extends FunctionComponent<HTMLProps> {}

interface Missing
  extends FunctionComponent,
    Partial<
      Readonly<{
        styles: Record<"title" | "linkText", Style<TextStyle>> & {
          view: Style<ViewStyle>;
          link: Style<RemoveProp<TextStyle, "textTransform">>;
        };
      }>
    > {}
