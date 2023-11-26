import { Text, View, Link } from "components";
import { defineProperties } from "utils";
import { useLayoutEffect, useNavigation } from "hooks";

const useMissing: Missing = () => {
  const { setOptions } = useNavigation<Stack>();
  const { styles } = useMissing;

  useLayoutEffect(() => {
    setOptions({ title: "Oops!" });
  }, [setOptions]);

  return (
    <View style={styles?.view}>
      <Text style={styles?.title}>This screen doesn&apos;t exist.</Text>
      <Link href="/(home)" style={styles?.link}>
        <Text style={styles?.linkText}>Go to home screen!</Text>
      </Link>
    </View>
  );
};

defineProperties(useMissing, {
  styles: {
    value: {
      view: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 20,
      },
      link: { marginTop: 15, paddingVertical: 15 },
      linkText: { color: "#2e78b7", fontSize: 14 },
      title: { fontSize: 20, fontWeight: "bold" },
    },
  },
});

export default useMissing;
