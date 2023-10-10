import { Text, View, Link } from "components";
import { defineProperties } from "utils";
import { useLayoutEffect, useNavigation } from "hooks";
import { Google } from "icons";

const useHome: import("./types").Home = () => {
  const { styles } = useHome;
  const { setOptions } = useNavigation<import("types").Stack>();

  useLayoutEffect(() => {
    setOptions({ title: "Home" });
  }, [setOptions]);

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
  styles: {
    value: {
      image: { width: 64, height: 64 },
      view: { alignItems: "center", flex: 1, justifyContent: "center" },
      title: { fontSize: 20, fontWeight: "bold" },
    },
  },
});

export default useHome;
