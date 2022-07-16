import { StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  container: { height: 40, backgroundColor: "violet" },
});

export default function Bar() {
  return <View style={style.container} />;
}
