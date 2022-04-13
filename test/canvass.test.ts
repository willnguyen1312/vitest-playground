import { process } from "./canvass";

describe("process function", () => {
  it("should work", () => {
    expect(process("hello")).toBe("l");
  });
});
