class ConfirmationPage {

    elements ={
        confirmationTitle: () => cy.get('[data-test="complete-header"]'),
        messageBody: () => cy.get('[data-test="finish"]'),
        homeBtn: () => cy.get('[data-test="back-to-products"]')
    }

    clickHomeBtn() {
        this.elements.homeBtn().click()
    }
}
export default new ConfirmationPage();