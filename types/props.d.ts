export interface Props {
  styleName?: string | undefined;
  className?: { [property: string]: string };
}

declare module "react-native" {
  interface ViewProps extends Props {}

  interface TextProps extends Props {}

  interface ScrollViewProps extends Props {}

  interface ImageBackgroundProps extends Props {}

  interface TouchableOpacityProps extends Props {}
}
