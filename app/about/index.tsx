import { useLayoutEffect, useNavigation } from "hooks";
import { View, Text } from "components";

export default function useAbout() {
  const { setOptions } = useNavigation<import("types").Stack>();

  useLayoutEffect(() => {
    setOptions({ title: "About" });
  }, [setOptions]);

  return (
    <View>
      <Text>useAbout</Text>
    </View>
  );
}
