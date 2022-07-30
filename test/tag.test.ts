describe("tag template literal", () => {
  it("should work", () => {
    let result = 0;
    function taggedFunction(strings, val1) {
      result = val;
    }

    const val = 90;
    taggedFunction`string here ${val}`;

    expect(result).toBe(val);
  });
});
