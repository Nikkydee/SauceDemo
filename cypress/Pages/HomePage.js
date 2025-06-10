class HomePage {
    elements = {
        appLogo: () => cy.get('.app_logo'),
        addBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        cartBadge: () =>cy.get('[data-test="shopping-cart-badge"]'),
        cartBtn: () => cy.get('[data-test="shopping-cart-link"]'),
        addFlashLightBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    clickAddpackBtn() {
        this.elements.addBackpackBtn().click();
    }

    clickCartBtn() {
        this.elements.cartBtn().click();
    }

    clickAddFlashLightBtn() {
        this.elements.addFlashLightBtn().click()
    }

}

export default new HomePage();