declare namespace NodeJS {
  interface ProcessEnv
    extends Record<
      | "apiKey"
      | "authDomain"
      | "projectId"
      | "storageBucket"
      | "messagingSenderId"
      | "appId",
      string
    > {}
}
