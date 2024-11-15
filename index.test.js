
const { ESLint } = require("eslint")
const config = require("./index")

describe("The config", () => {

  it("is valid eslint config", () => {
    expect(() => {
      new ESLint({ baseConfig: config })
    }).not.toThrow()
  })

  it("lints the index file", async () => {
    const eslint = new ESLint({ baseConfig: config })
    const results = await eslint.lintFiles("./index.js")
    expect(results[0].messages).toHaveLength(0)
  })

})
