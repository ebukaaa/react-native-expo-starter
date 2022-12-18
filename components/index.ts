import type { StackScreenProps } from "./types";
import load from "./utils";

export const Home = (props: StackScreenProps) =>
  load(import("screens/home"), props);

export default Home;
