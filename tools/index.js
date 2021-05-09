import { lazy, Suspense } from "react";
import { Text } from "react-native";

function load(importPath, props) {
  const Path = lazy(() => importPath);

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Path {...props} />
    </Suspense>
  );
}

export const useStatusBar = () => load(import("./status-bar"));
