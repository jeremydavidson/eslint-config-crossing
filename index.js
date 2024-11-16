

// import path from "node:path"
// import { fileURLToPath } from "node:url"

// import { FlatCompat } from "@eslint/eslintrc"
// import js from "@eslint/js"
import js from "@eslint/js"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import tsParser from "@typescript-eslint/parser"
import jest from "eslint-plugin-jest"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

import sharedRules from "./index.rules.js"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// })

export default [
  js.configs.recommended,
  {
    plugins: {
      jest,
      "simple-import-sort": simpleImportSort,
      "@stylistic/ts": stylisticTs,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...jest.environments.globals.globals,
      },

      parser: tsParser,
    },

    rules: sharedRules,
  }]
