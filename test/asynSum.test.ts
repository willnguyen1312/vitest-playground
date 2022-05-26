describe("asyncSum function", () => {
  it("should work", async () => {
    const arr = [1, 3, 5, 10];

    let result = 0;
    let i = 0;

    while (i < arr.length) {
      const current = arr[i];
      if (current % 2 === 0) {
        break;
      }

      const addition = await Promise.resolve(current);
      result += addition;
      i++;
    }

    expect(result).toBe(9);
  });
});
