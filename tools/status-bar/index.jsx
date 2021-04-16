import { React, StatusBar, useStore } from "./utils";

export function useStatusBar() {
  const { style } = useStore();

  return <StatusBar style={style} />;
}
