describe("tag template literal", () => {
  it("should work", () => {
    function taggedFunction(strings, val1) {
      console.log(strings);
      console.log(val1);
    }

    const val = 90;
    taggedFunction`string here ${val}`;
  });
});
