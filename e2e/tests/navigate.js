import { buttons, screens } from "../components"

describe("Navigation", () => {
  it("Should navigate to calculator", async () => {
    await element(by.id(buttons.tabs.calculator)).tap()
    await expect(element(by.id(screens.tabs.calculator))).toBeVisible()
  })

  it("Should navigate to savings", async () => {
    await element(by.id(buttons.tabs.savings)).tap()
    await expect(element(by.id(screens.tabs.savings))).toBeVisible()
  })

  it("Should navigate to more", async () => {
    await element(by.id(buttons.tabs.more)).tap()
    await expect(element(by.id(screens.tabs.more.root))).toBeVisible()
  })

  it("Should navigate to apply", async () => {
    await element(by.id(buttons.tabs.apply)).tap()
    await expect(element(by.id(screens.tabs.apply.root))).toBeVisible()
  })
})
