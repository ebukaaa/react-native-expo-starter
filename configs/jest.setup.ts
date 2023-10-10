import "react-native-gesture-handler/jestSetup";
import "react-native-reanimated/mock";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("*.svg", () => jest.fn());
