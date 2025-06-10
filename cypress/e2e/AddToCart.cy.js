import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";

describe('Test add to cart scenarios', () => {
 
    beforeEach(function () {
        cy.visit('');
        cy.fixture('loginDetails').as('loginData');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLoginButton();
        
    })
    
    it('Verify that the user can add a single item to the cart', () => {
        HomePage.clickAddpackBtn();
        HomePage.elements.cartBadge().should('contain', 1);
        HomePage.clickCartBtn();
        CartPage.elements.backpackItem().invoke('text').then((text) => {
            expect(text).to.include('Sauce Labs Backpack')
        })
      
    });
    
    it('Verify that the user can add multiple items to the cart', () => {
        HomePage.clickAddpackBtn();
        HomePage.clickCartBtn();
        CartPage.clickContinueShoppingBtn()
        HomePage.clickAddFlashLightBtn()
        HomePage.elements.cartBadge().should('contain', 2);
        CartPage.elements.backpackItem().invoke('text').then((text) => {
            expect(text).to.include('Sauce Labs Backpack')
        })
        CartPage.elements.bikeLightItem().invoke('text').then((text) => {
            expect(text).to.include('Sauce Labs Bike Light')
        })
    });
    
    it('Verify that the user can remove an item from the cart', () => {
        HomePage.clickAddpackBtn();
        HomePage.clickAddFlashLightBtn()
        HomePage.clickCartBtn();
        CartPage.clickremoveBikeLight()
        HomePage.elements.cartBadge().should('contain', 1);
        CartPage.elements.backpackItem().invoke('text').then((text) => {
            expect(text).to.include('Sauce Labs Backpack')
        })
    });
    

});