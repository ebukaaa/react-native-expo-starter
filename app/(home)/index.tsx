import { defineProperties, load } from "utils";
import { Text, View, Link } from "components";
import { useLayoutEffect, useNavigation } from "hooks";

const useHome: Home = () => {
  const { styles, eventListener = () => null, Google = () => null } = useHome;
  const { setOptions } = useNavigation<Stack>();

  defineProperties(useHome, {
    setOptions: { get: () => setOptions, configurable: true },
  });

  useLayoutEffect(eventListener, [eventListener]);

  return (
    <View style={styles?.view}>
      <Link href="/about">
        <Text style={styles?.title}>Go to About Screen</Text>
      </Link>
      <Google width={64} height={64} />
      {/* <Image
        style={styles?.image}
        contentFit="cover"
        source={require("assets/svgs/google.svg")}
        placeholder="|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["
      /> */}
    </View>
  );
};

defineProperties(useHome, {
  eventListener: {
    value() {
      const { setOptions = () => null } = useHome;
      setOptions({ title: "Home" });
    },
  },
  Google: { value: (props) => load(import("assets/svgs/google.svg"), props) },
  styles: {
    value: {
      view: { alignItems: "center", flex: 1, justifyContent: "center" },
      title: { fontSize: 20, fontWeight: "bold" },
    },
  },
});

export default useHome;
