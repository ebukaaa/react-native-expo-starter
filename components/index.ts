import { load } from "@pascinso/utils";
import type { StackScreenProps } from "./@types";

export const Home = (props: StackScreenProps) =>
  load(import("screens/home"), props);

export default Home;
