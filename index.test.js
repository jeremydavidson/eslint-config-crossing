import { ESLint } from "eslint"

import flatConfig from "./index"

describe("The config", () => {

  it("is valid eslint flat config", () => {
    expect(() => {
      new ESLint({ baseConfig: flatConfig })
    }).not.toThrow()
  })

  it("lints the index file", async () => {
    const eslint = new ESLint({ baseConfig: flatConfig })
    const results = await eslint.lintFiles("./eslint.config.js")
    expect(results[0].messages).toHaveLength(0)
  })

})
