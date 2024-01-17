declare namespace NodeJS {
  interface ProcessEnv
    extends Readonly<{
      // * Replace props
      [prop in
        | "apiKey"
        | "authDomain"
        | "projectId"
        | "storageBucket"
        | "messagingSenderId"
        | "appId"]: string;
    }> {}
}
