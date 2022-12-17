import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackScreenProps = NativeStackScreenProps<ParamListBase>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type Properties<Component extends object> = {
  [property in keyof Optional<Component, keyof Component>]: {
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
