declare module "*.scss" {
  const classNames: { [className: string]: { [property: string]: string } };

  export default classNames;
}
