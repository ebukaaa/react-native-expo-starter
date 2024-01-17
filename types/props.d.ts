export interface Props
  extends Partial<{
    styleName: string | undefined;
    className: { [key: string]: string };
  }> {}

declare module "react-native" {
  interface ViewProps extends Props {}

  interface TextProps extends Props {}

  interface ScrollViewProps extends Props {}

  interface ImageBackgroundProps extends Props {}

  interface TouchableOpacityProps extends Props {}
}
