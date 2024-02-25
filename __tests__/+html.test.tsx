import { render } from "@testing-library/react-native";
import { ScrollViewStyleReset } from "components";
import HTML from "../app/+html";

describe("<HTML/>", () => {
  it("should render", () => {
    const {
      root: { children },
    } = render(
      <HTML>
        <header />
      </HTML>,
    );

    expect(children.length).toBeGreaterThan(0);
  });
  it("should have prop lang=en", () => {
    const { toJSON } = render(
      <HTML>
        <header />
      </HTML>,
    );
    const json = toJSON();
    if (!json || json instanceof Array)
      throw new Error("JSON is either undefined or not an instance of Array");
    expect(json.props).toEqual({ lang: "en" });
  });
  it("should call <ScrollViewStyleReset/> once", () => {
    render(
      <HTML>
        <header />
      </HTML>,
    );
    expect(ScrollViewStyleReset).toHaveBeenCalledTimes(1);
  });
});
