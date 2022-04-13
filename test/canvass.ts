export function process(str: string): string {
  const lookup: Record<string, number> = {};

  for (const char of str) {
    if (lookup[char]) {
      lookup[char] = lookup[char] + 1;
    } else {
      lookup[char] = 1;
    }
  }

  let result = "";
  let maxCount = Number.MIN_VALUE;

  Object.keys(lookup).forEach((letter) => {
    const count = lookup[letter];

    if (count > maxCount) {
      result = letter;
      maxCount = count;
    }
  });

  return result;
}
