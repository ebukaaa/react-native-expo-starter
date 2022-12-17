import { Text, View } from "react-native";
import classNames from "./style.module.scss";

export default function Home() {
  return (
    <View className={classNames.home}>
      <Text className={classNames.text}>Home</Text>
    </View>
  );
}
