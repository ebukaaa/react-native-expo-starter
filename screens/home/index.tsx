import { Text, View } from "react-native";
import Google from "assets/google.svg";
import classNames from "./style.module.scss";

export default function useHome() {
  return (
    <View className={classNames.home}>
      <Text className={classNames.text}>Home</Text>
      <Google className={classNames.google} />
    </View>
  );
}
