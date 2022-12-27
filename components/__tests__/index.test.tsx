import { render } from "@testing-library/react-native";
import { Home } from "components";
import { load } from "@pascinso/utils";

jest.mock("@pascinso/utils", () => ({ load: jest.fn() }));

describe("Home", () => {
  it("should load component", () => {
    expect(render(<Home />).container).toBeTruthy();
    expect(load).toHaveBeenCalledTimes(1);
  });
});
