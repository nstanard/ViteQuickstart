import { expect } from "@jest/globals";
import { REACT_STRICT_MODE } from "src/constants";

jest.mock("src/constants", () => ({
  REACT_STRICT_MODE: false,
}));

describe("Constants", () => {
  test("Env vars can be mocked", async () => {
    expect(REACT_STRICT_MODE).toEqual(false);
  });
});
