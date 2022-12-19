import { render } from "@testing-library/react-native";
import { Home } from "components";

describe("Home", () => {
  it("should load component", () => {
    expect(render(<Home />).container).toBeTruthy();
  });
});
