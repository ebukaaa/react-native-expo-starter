import { render } from "@testing-library/react-native";
import type { ReactTestRendererJSON } from "react-test-renderer";
import App from "App";

describe("App", () => {
  it("should render", () => {
    expect(
      (render(<App />).toJSON() as ReactTestRendererJSON).children
    ).toHaveLength(1);
  });
});
