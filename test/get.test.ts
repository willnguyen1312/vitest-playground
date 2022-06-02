import { get } from "lodash-es";

describe("get Lodash", () => {
  it("should work", () => {
    const obj = { a: { b: { c: 1 } } };

    expect(get(obj, "a.b.c")).toBe(1);
    expect(get(obj, ["a", "b", "c"])).toBe(1);
  });
});
