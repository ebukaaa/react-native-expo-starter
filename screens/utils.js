import { createStackNavigator } from "@react-navigation/stack";
import { useMemo } from "react";
import { useHome } from "./home";

export function useStore() {
  return {
    stack: useMemo(() => createStackNavigator(), []),
    useHome,
  };
}
