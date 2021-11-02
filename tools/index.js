import { lazy, Suspense } from "react";

export default function load(importPath, props) {
  const Path = lazy(() => importPath);

  return (
    <Suspense fallback={null}>
      <Path {...props} />
    </Suspense>
  );
}

// export const useStatusBar = () => load(import("./status-bar"));
