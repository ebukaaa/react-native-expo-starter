import { render } from "@testing-library/react-native";
import { Stack } from "components";
import About from "../app/about";

describe("<About/>", () => {
  it("should render", () => {
    const {
      root: { children },
    } = render(<About />);
    expect(children).toHaveLength(1);
  });
  it("should call <Stack.Screen />", () => {
    render(<About />);
    expect(Stack.Screen).toHaveBeenCalledTimes(1);
  });
});
