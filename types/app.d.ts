interface HTMLProps {
  children: ReactNode;
}

interface HTML extends FunctionComponent<HTMLProps> {}

interface Missing
  extends FunctionComponent,
    Partial<
      Readonly<
        Pick<Stack, "setOptions"> & {
          eventListener: () => void;
          styles: { [textStyle in "title" | "linkText"]: Style<TextStyle> } & {
            view: Style<ViewStyle>;
            link: ComponentProps<typeof import("components").Link>["style"];
          };
        }
      >
    > {}

interface Layout extends FunctionComponent {}
