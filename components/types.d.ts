import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ComponentType = object & { name: string };

export type Action = "get" | "set" | "access";

export type StackScreenProps = Partial<NativeStackScreenProps<ParamListBase>>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Properties<Component extends object> = {
  [property in keyof Partial<Component>]: {
    value?: Component[property];
    get?: () => Component[property];
    set?: (value: Component[property]) => void;
    writable?: boolean;
    configurable?: boolean;
  };
};

interface ImportedComponent<Props extends object> {
  default(props: Props | object): JSX.Element | null;
}
