import { render } from "@testing-library/react-native";
import load, { defineProperties, throwError } from "components/utils";

describe("load", () => {
  it("should load a component", () => {
    const Icon = () => load(import("public/vercel.svg"));
    const screen = render(<Icon />);
    expect(screen.container).toBeTruthy();
  });
});

describe("defineProperties", () => {
  it("should amend a current property in an object", () => {
    const person = { name: "John", age: 1 };

    defineProperties(person, { name: { value: "Doe", writable: false } });

    expect(person.name).toBe("Doe");
    expect(person.name).not.toBe("John");
  });
});

describe("throwError", () => {
  const usePerson = { name: "usePerson", age: 12 };
  const error = throwError(usePerson, "access", "age");

  it("should return a function", () => {
    expect(typeof error).toBe("function");
  });
  it("should throw an error message", () => {
    const message = "Person should be rendered to access 'age' property";
    expect(error).toThrow(Error(message));
  });
});
