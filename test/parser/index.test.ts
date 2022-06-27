import { parse } from "acorn";
// import { parse } from "@babel/parser";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

describe("Acorn parser", () => {
  it("should work", async () => {
    const source = readFileSync(resolve(__dirname, "file.ts"), {
      encoding: "utf-8",
    });

    const output = parse(source, { ecmaVersion: 2022 });
    writeFileSync(
      resolve(__dirname, "out.json"),
      JSON.stringify(output, null, 2)
    );
  });
});
