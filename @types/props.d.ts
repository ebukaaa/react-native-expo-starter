export interface Props {
  styleName?: string;
  className?: string;
}

declare module "react-native" {
  interface ViewProps extends Props {}
  interface TextProps extends Props {}
  interface ScrollViewProps extends Props {}
}
