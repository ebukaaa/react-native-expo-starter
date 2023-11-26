import { View, Text } from "components";
import { useLayoutEffect, useNavigation } from "hooks";

export default function useAbout() {
  const { setOptions } = useNavigation<Stack>();

  useLayoutEffect(() => {
    setOptions({ title: "About" });
  }, [setOptions]);

  return (
    <View>
      <Text>useAbout</Text>
    </View>
  );
}
