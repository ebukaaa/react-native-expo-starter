interface HTMLProps {
  children: ReactNode;
}

interface HTML extends FunctionComponent<HTMLProps> {}

interface NotFound
  extends FunctionComponent,
    Partial<
      Readonly<{
        styles: { [textStyle in "title" | "linkText"]: Style<TextStyle> } & {
          view: Style<ViewStyle>;
          link: ComponentProps<typeof import("components").Link>["style"];
        };
      }>
    > {}

interface Layout extends FunctionComponent {}
