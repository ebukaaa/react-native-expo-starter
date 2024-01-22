import { defineProperties } from "utils";
import { Text, View, Link, Stack } from "components";

const useNotFound: NotFound = () => {
  const { styles } = useNotFound;
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles?.view}>
        <Text style={styles?.title}>This screen doesn`&apos;`t exist.</Text>

        <Link href="/" style={styles?.link}>
          <Text style={styles?.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
};

defineProperties(useNotFound, {
  styles: {
    value: {
      view: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 20,
      },
      link: {
        marginTop: 15,
        paddingVertical: 15,
      },
      linkText: {
        color: "#2e78b7",
        fontSize: 14,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
  },
});

export default useNotFound;
