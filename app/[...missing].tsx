import { defineProperties } from "utils";
import { Text, View, Link } from "components";
import { useLayoutEffect, useNavigation } from "hooks";

const useMissing: Missing = () => {
  const { styles, eventListener = () => null } = useMissing;
  const { setOptions } = useNavigation<Stack>();

  defineProperties(useMissing, {
    setOptions: { get: () => setOptions, configurable: true },
  });

  useLayoutEffect(eventListener, [eventListener]);

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
  eventListener: {
    value() {
      const { setOptions = () => null } = useMissing;
      setOptions({ title: "Oops!" });
    },
  },
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
