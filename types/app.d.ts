import type { FunctionComponent, StyleProp, TextStyle } from "types";

type TextStyles = "title" | "linkText";

interface HTMLProps {
  children: import("types").ReactNode;
}

interface HTML extends FunctionComponent<HTMLProps> {}

interface Missing
  extends FunctionComponent,
    Partial<
      Readonly<{
        styles: Record<TextStyles, StyleProp<TextStyle>> & {
          view: StyleProp<import("types").ViewStyle>;
          link: StyleProp<Omit<TextStyle, "textTransform">>;
        };
      }>
    > {}
