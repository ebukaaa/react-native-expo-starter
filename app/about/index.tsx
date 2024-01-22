import { View, Text, Stack } from "components";

const useAbout = () => {
  return (
    <>
      <Stack.Screen options={{ title: "About" }} />
      <View>
        <Text>useAbout</Text>
      </View>
    </>
  );
};

export default useAbout;
