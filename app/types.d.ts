import type {
  FunctionComponent,
  ReactNode,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "types";

type TextStyles = "title" | "linkText";

export interface HTMLProps {
  children: ReactNode;
}

export interface Missing
  extends FunctionComponent,
    Partial<
      Readonly<{
        styles: Record<TextStyles, StyleProp<TextStyle>> & {
          view: StyleProp<ViewStyle>;
          link: StyleProp<Omit<TextStyle, "textTransform">>;
        };
      }>
    > {}

export type { Stack as StackType } from "types";
