import { render } from "@testing-library/react-native";
import { ReactTestRendererJSON } from "react-test-renderer";
import Google from "assets/google.svg";
import Home from "..";

describe("useHome", () => {
  it("should render", () => {
    const { children } = render(<Home />).toJSON() as ReactTestRendererJSON;
    expect(children).toBeTruthy();
  });
  it("should call Google icon", () => {
    render(<Home />);
    expect(Google).toHaveBeenCalled();
  });
});
