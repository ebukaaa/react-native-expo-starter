declare module "*.svg" {
  const svg: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

  export default svg;
}
