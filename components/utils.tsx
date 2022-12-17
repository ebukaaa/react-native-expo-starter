import { lazy, Suspense } from "react";
import type { ImportedComponent, Properties } from "./types";

export default function load<Props extends object>(
  importedComponent: Promise<ImportedComponent<Props>>,
  props?: Props
) {
  const Component = lazy(() => importedComponent);

  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
}

export function defineProperties<Component extends object>(
  component: Component,
  properties: Properties<Component>
) {
  Object.defineProperties(component, properties);
}
