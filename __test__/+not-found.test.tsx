import { render } from "@testing-library/react-native";
import { Stack } from "components";
import NotFound from "../app/+not-found";

describe("<NotFound/>", () => {
  it("should render", () => {
    const {
      root: { children },
    } = render(<NotFound />);
    expect(children.length).toBeGreaterThan(0);
  });
  it("should call <Stack.Screen/> once", () => {
    render(<NotFound />);
    expect(Stack.Screen).toHaveBeenCalledTimes(1);
  });
});
