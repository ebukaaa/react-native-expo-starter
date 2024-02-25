jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("*.svg", () => jest.fn());
jest.mock("utils/mocks/@pascinso", () => ({
  load: jest.fn(),
  defineProperties: jest.fn(),
}));
jest.mock("expo-router", () => ({
  Stack: { Screen: jest.fn() },
  Link: ({ children }) => children,
}));

jest.mock("expo-router/html", () => ({ ScrollViewStyleReset: jest.fn() }));
jest.mock("hooks", () => ({
  useNavigation: () => ({ setOptions: jest.fn() }),
  useLayoutEffect: jest.fn(),
}));
jest.mock("components/mocks/logbox", () => ({
  LogBox: { ignoreLogs: jest.fn() },
}));
