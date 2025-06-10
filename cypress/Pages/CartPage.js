class CartPage {
    elements = {
        backpackItem: () => cy.get('[data-test="inventory-item-name"]'),
        continueShoppingBtn: () => cy.get('[data-test="continue-shopping"]'),
        bikeLightItem: () => cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'),
        removeBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        checkoutBtn: () => cy.get('[data-test="checkout"]')

        
    }
    clickContinueShoppingBtn() {
        this.elements.continueShoppingBtn().click();
    }
    clickremoveBikeLight() {
        this.elements.removeBikeLight().click()
    }
    clickCheckoutBtn() {
        this.elements.checkoutBtn().click()
    }
}
export default new CartPage();