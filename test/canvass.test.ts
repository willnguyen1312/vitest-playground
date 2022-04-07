import { hi } from "./canvass";

describe("hi function", () => {
  it("should work", () => {
    const name = "Vi";
    const greeting = hi(name);

    expect(greeting).toBe("Greeting Vi");
  });
});
