import { useStore } from "./utils";

export function useHome() {
  const {
    styles: { appStyles },
    View,
    Text,
  } = useStore();

  return (
    <View style={appStyles}>
      <Text>New components</Text>
    </View>
  );
}
