module.exports = {
  "@stylistic/ts/indent": ["error", 2, {
    ignoredNodes: ["PropertyDefinition[decorators]", "CallExpression[arguments]"],
  }],

  "@stylistic/ts/quotes": [2, "double"],
  "indent": ["error", 2],

  "max-len": ["error", {
    code: 180,
  }],

  "new-cap": ["error", {
    capIsNew: false,
  }],

  "no-multi-str": "off",
  "no-trailing-spaces": "error",

  "object-curly-newline": ["error"],
  "object-curly-spacing": ["error", "always"],
  "object-property-newline": ["error"],

  "padded-blocks": ["error", {
    classes: "always",
  }],

  "quotes": [2, "double"],
  "require-jsdoc": "off",
  "semi": ["error", "never"],
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "valid-jsdoc": "off",
}
