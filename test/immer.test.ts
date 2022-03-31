import { expect, test } from "vitest";

import produce from "immer";

const baseState = [
  {
    title: "Learn TypeScript",
    done: true,
  },
  {
    title: "Try Immer",
    done: false,
  },
];

test("immer", () => {
  const nextState = produce(baseState, (draft) => {
    draft[1].done = true;
    draft.push({ title: "Tweet about it", done: false });
  });

  expect(baseState).toEqual([
    {
      title: "Learn TypeScript",
      done: true,
    },
    {
      title: "Try Immer",
      done: false,
    },
  ]);

  expect(nextState).toEqual([
    { title: "Learn TypeScript", done: true },
    { title: "Try Immer", done: true },
    { title: "Tweet about it", done: false },
  ]);
});
