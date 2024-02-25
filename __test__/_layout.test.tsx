import { render } from "@testing-library/react-native";
import { Stack } from "components";
import Layout from "../app/_layout";

jest.mock("components/mocks/stack", () => ({ Stack: jest.fn() }));

describe("<Layout/>", () => {
  it("should render", () => {
    const { toJSON } = render(<Layout />);
    expect(toJSON()).toBeNull();
  });
  it("should call <Stack/> once", () => {
    render(<Layout />);
    expect(Stack).toHaveBeenCalledTimes(1);
  });
});
