import { objectHasKeys, getErrorMessage } from "../util";

describe("object has keys", () => {
  test("object has keys returns false when empty", () => {
    expect(objectHasKeys({})).toEqual(false);
  });

  test("object has keys returns true when not empty", () => {
    expect(objectHasKeys({ foo: "bar" })).toEqual(true);
  });
});

describe("get error message", () => {
  test("object has keys returns false when empty", () => {
    expect(getErrorMessage(Error("message"))).toEqual("message");
  });
});
