import { parse } from "acorn";

describe("Acorn parser", () => {
  it("should work", () => {
    expect(
      parse(
        `
let tips = [
  "Click on any AST node with a '+' to expand it",

  "Hovering over a node highlights the \
   corresponding location in the source code",

  "Shift click on an AST node to expand the whole subtree"
];`,
        { ecmaVersion: 2020 }
      )
    ).toMatchInlineSnapshot(`
      Node {
        "body": [
          Node {
            "declarations": [
              Node {
                "end": 213,
                "id": Node {
                  "end": 9,
                  "name": "tips",
                  "start": 5,
                  "type": "Identifier",
                },
                "init": Node {
                  "elements": [
                    Node {
                      "end": 63,
                      "raw": "\\"Click on any AST node with a '+' to expand it\\"",
                      "start": 16,
                      "type": "Literal",
                      "value": "Click on any AST node with a '+' to expand it",
                    },
                    Node {
                      "end": 150,
                      "raw": "\\"Hovering over a node highlights the    corresponding location in the source code\\"",
                      "start": 68,
                      "type": "Literal",
                      "value": "Hovering over a node highlights the    corresponding location in the source code",
                    },
                    Node {
                      "end": 211,
                      "raw": "\\"Shift click on an AST node to expand the whole subtree\\"",
                      "start": 155,
                      "type": "Literal",
                      "value": "Shift click on an AST node to expand the whole subtree",
                    },
                  ],
                  "end": 213,
                  "start": 12,
                  "type": "ArrayExpression",
                },
                "start": 5,
                "type": "VariableDeclarator",
              },
            ],
            "end": 214,
            "kind": "let",
            "start": 1,
            "type": "VariableDeclaration",
          },
        ],
        "end": 214,
        "sourceType": "script",
        "start": 0,
        "type": "Program",
      }
    `);
  });
});
