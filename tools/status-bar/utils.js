import { useEffect, useState } from "react";
import { unmount } from "tools";

let initStyle;
let putStyle;

function updateStyle({ style, setStyle }) {
  if (initStyle !== style) {
    initStyle = style;
  }
  if (setStyle && putStyle !== setStyle) {
    putStyle = setStyle;
  }
}

export { default as React } from "react";
export { StatusBar } from "expo-status-bar";

export function useStore() {
  const [style, setStyle] = useState("auto");
  updateStyle({ style, setStyle });
  useEffect(() => unmount({ set: setStyle }), []);
  useEffect(() => updateStyle({ style }), [style]);

  return { style };
}
export function useProps() {
  return {
    initStyle,
    putStyle,
  };
}
