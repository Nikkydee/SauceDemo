import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import CheckoutInformationPage from "../Pages/CheckoutInformationPage";
import ConfirmationPage from "../Pages/ConfirmationPage";

describe('Test add to cart scenarios', () => {
 
    before(function () {
        cy.visit('');
        cy.fixture('loginDetails').as('loginData');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLoginButton();
        
    })

    it('Verify that user sis able to checkout', () => {
        HomePage.clickAddpackBtn();
        HomePage.clickCartBtn();
        CartPage.clickCheckoutBtn()
        CheckoutInformationPage.enterFirstname("Adenike")
        CheckoutInformationPage.enterLastname("Adenike")
        CheckoutInformationPage.enterZipCode("100235")
        CheckoutInformationPage.clickContinueBtn()
        CheckoutInformationPage.clickFinihBtn()
        ConfirmationPage.elements.confirmationTitle().invoke('text').then((text) => {
            expect(text).to.include('Thank you for your order!')
        })
    });
})