import { buttons, inputs, screens } from "../components"

describe("Authentication", () => {
  it("Should go to authenticate screen", async () => {
    await expect(element(by.id(screens.auth.login))).toBeVisible()
  })

  it("Should log in successfully", async () => {
    await element(by.id(inputs.auth.email)).typeText("admin@admin.com")
    await element(by.id(inputs.auth.password)).typeText("password")
    await element(by.id(buttons.auth.login)).tap()
    await expect(element(by.id(screens.tabs.apply.root))).toBeVisible()
  })
})
