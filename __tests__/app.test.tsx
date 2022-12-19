import { render } from "@testing-library/react-native";
import type { ReactTestRendererJSON } from "react-test-renderer";
import App from "App";

jest.mock("components");

describe("App", () => {
  it("should have a child", () => {
    expect(
      (render(<App />).toJSON() as ReactTestRendererJSON).children
    ).toHaveLength(1);
  });
});
