import { render } from "@testing-library/react-native";
import { defineProperties } from "utils";
import { useLayoutEffect } from "hooks";
import Home from "../app/(home)";

describe("<Home/>", () => {
  it("should render 2 children", () => {
    const {
      root: { children },
    } = render(<Home />);
    expect(children).toHaveLength(2);
  });
  it("should call defineProperties() & useLayoutEffect() once", () => {
    render(<Home />);
    expect(defineProperties).toHaveBeenCalledTimes(1);
    expect(useLayoutEffect).toHaveBeenCalledTimes(1);
  });
});
