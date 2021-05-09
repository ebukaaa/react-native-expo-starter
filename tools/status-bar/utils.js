import { useEffect, useState, useMemo } from "react";
import { StatusBar } from "expo-status-bar";

let initStyle;
let putStyle;

export function useStore() {
  const [style, setStyle] = useState("auto");
  useMemo(() => {
    if (putStyle !== setStyle) {
      putStyle = setStyle;
    }
    initStyle = style;
  }, [style]);

  useEffect(() => () => setStyle("auto"), []);

  return { style, StatusBar };
}
export function useProps() {
  return {
    initStyle,
    putStyle,
  };
}
