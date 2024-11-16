"use strict"

// // If export module: "test": node --experimental-vm-modules node_modules/.bin/jest
// export default {
module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "jest": true,
    "jest/globals": true,
  },
  "plugins": [
    "jest",
    "simple-import-sort",
    "@stylistic/ts",
  ],
  "extends": [
    "google",
  ],
  "rules": {
    "@stylistic/ts/indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "PropertyDefinition[decorators]",
          "CallExpression[arguments]",
        ],
      },
    ],
    "@stylistic/ts/quotes": [
      2,
      "double",
    ],
    "indent": ["error", 2],
    "max-len": ["error", {
      code: 180,
      tabWidth: 2,
      ignoreUrls: true,
    }],
    "new-cap": [
      "error",
      {
        "capIsNew": false,
      },
    ],
    "no-multi-str": "off",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "padded-blocks": [
      "error",
      {
        "classes": "always",
      },
    ],
    "quotes": [
      2,
      "double",
    ],
    "require-jsdoc": "off",
    "semi": [
      "error",
      "never",
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // "sort-imports": [
    //   "error"
    // ],
    "valid-jsdoc": "off",
  },
  "overrides": [
    {
      "files": ["*.json", "*.jsonc"],
      "rules": {
        "comma-dangle": ["error", "never"],
      },
    },
  ],
}
