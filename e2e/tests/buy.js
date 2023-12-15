import { buttons, inputs } from "../components"

describe("Buy a House", () => {
  it("Should go to buy wizard", async () => {
    await element(by.id(buttons.buy.card)).tap()
    await expect(element(by.id(inputs.apply.buy.purchase))).toBeVisible()
  })

  it("Should clear step one", async () => {
    await element(by.id(inputs.apply.buy.purchase)).clearText()
    await element(by.id(inputs.apply.buy.purchase)).typeText("450000")
    await element(by.id(inputs.apply.buy.down)).clearText()
    await element(by.id(inputs.apply.buy.down)).typeText("45000")
    await element(by.id(buttons.buy.next)).tap()
    await element(by.id(inputs.apply.buy.location)).toBeVisible()
  })
})
