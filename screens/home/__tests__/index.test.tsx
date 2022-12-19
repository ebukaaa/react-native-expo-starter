import { render } from "@testing-library/react-native";
import { ReactTestRendererJSON } from "react-test-renderer";
import Google from "assets/google.svg";
import Home from "..";

describe("useHome", () => {
  let app: ReactTestRendererJSON;

  beforeEach(() => {
    app = render(<Home />).toJSON() as ReactTestRendererJSON;
  });

  it("should render", () => {
    expect(app.children).toBeTruthy();
  });
  it("should call Google icon", () => {
    expect(Google).toHaveBeenCalled();
  });
});
