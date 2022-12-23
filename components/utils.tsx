import { lazy, Suspense } from "react";
import type {
  Action,
  ComponentType,
  ImportedComponent,
  Properties,
} from "./@types";

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

export function throwError<Component extends ComponentType>(
  component: Component,
  action: Action,
  property: keyof Component
) {
  return function error() {
    throw new Error(
      `${component.name.substring(
        3
      )} should be rendered to ${action} '${property.toString()}' property`
    );
  };
}
