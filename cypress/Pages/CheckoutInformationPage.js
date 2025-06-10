class CheckoutInformationPage {
    elements = {
        firstnameField: () => cy.get('[data-test="firstName"]'),
        lastnameField: () => cy.get('[data-test="lastName"]'),
        zipCodeField: () => cy.get('[data-test="postalCode"]'),
        continueBtn:() => cy.get('[data-test="continue"]'),
        finishBtn: () => cy.get('[data-test="finish"]')
        
    }

    enterFirstname(firstname) {
        this.elements.firstnameField().type(firstname)
    }
    enterLastname(lastname) {
        this.elements.lastnameField().type(lastname)
    }
    enterZipCode(zipCode) {
        this.elements.zipCodeField().type(zipCode)
    }
    clickContinueBtn() {
        this.elements.continueBtn().click()
    }
    clickFinihBtn() {
        this.elements.finishBtn().click()
    }
}
export default new CheckoutInformationPage();