declare module "*.svg" {
  import { SVGProps } from "react";

  const svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;

  export default svg;
}
