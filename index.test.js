import { peek, push, pop } from "./index.js";

describe("Stack operations", () => {
  test("Peek should return null from an empty stack", () => {
    const stack = [];
    expect(peek(stack)).toBe(null);
  });

  test("Peek should return the top element from a non-empty stack", () => {
    const element = "A";
    const stack = [element];
    expect(peek(stack)).toBe(element);
  });

  test("Push adds one element to an empty stack", () => {
    const stack = [];
    const element = "A";
    expect(push(stack, element)).toEqual(["A"]);
  });

  test("Push adds one element to a non-empty stack", () => {
    const stack = ["A"];
    const element = "B";
    expect(push(stack, element)).toEqual(["A", "B"]);
  });

  test("Pop raises an exception on an empty", () => {
    const stack = [];
    expect(() => {
      pop(stack);
    }).toThrow("Can't pop from an empty stack");
  });

  test("Pop removes the top element of a non-empty stack", () => {
    const stack = ["A"];
    expect(pop(stack)).toEqual([]);
  });
});
