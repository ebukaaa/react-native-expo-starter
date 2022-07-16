import { lazy, Suspense } from "react";
import { View } from "react-native";

const Bar = lazy(() => import("components/bar"));

export default function Home() {
  return (
    <View>
      <Suspense fallback={null}>
        <Bar />
      </Suspense>
    </View>
  );
}
