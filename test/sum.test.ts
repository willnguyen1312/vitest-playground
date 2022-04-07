import { sum } from "./sum";

describe("sum function", () => {
  it("should work", () => {
    const first = 2;
    const second = 4;

    const result = sum(first, second);

    expect(result).toBe(6);
  });
});
