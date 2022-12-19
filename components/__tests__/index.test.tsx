import { render } from "@testing-library/react-native";
import { Home } from "components";

describe("Home", () => {
  it("should load Home component", () => {
    expect(render(<Home />).container).toBeTruthy();
  });
});
