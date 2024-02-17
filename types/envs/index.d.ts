type Options = "x" | "y";

declare namespace NodeJS {
  interface ProcessEnv extends Readonly<{ [prop in Options]: string }> {}
}
