import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";


describe('Test login scenarios', () => {

  beforeEach(() => {
    cy.visit('')
    cy.fixture('loginDetails').as('loginData')
  })
  

  it('Verify that the  user cannot log in successfully with invalid username and valid password', function () {
   
    LoginPage.enterUsername(this.loginData.userData.invalidUsername);
    LoginPage.enterPassword(this.loginData.userData.invalidPassword);
    LoginPage.clickLoginButton();   
    expect(LoginPage.elements.errorMsg().should('be.visible'));
     LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Username and password do not match any user in this service');
    });
    LoginPage.closeError();
  })

  it('Verify that the user cannot log in successfully with valid username and invalid password', function () {
    LoginPage.enterUsername(this.loginData.userData.validUsername);
    LoginPage.enterPassword(this.loginData.userData.invalidPassword);
    LoginPage.clickLoginButton();
    expect(LoginPage.elements.errorMsg().should('be.visible'));
    LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Username and password do not match any user in this service');
    });
  })

  it('Verify that the user cannot  log in successfully with invalid username and invalid password', function () {
    LoginPage.enterUsername(this.loginData.userData.invalidUsername);
    LoginPage.enterPassword(this.loginData.userData.invalidPassword);
    LoginPage.clickLoginButton();
    expect(LoginPage.elements.errorMsg().should('be.visible'));
    LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Username and password do not match any user in this service');
    });
  })

  it('Verify that the user cannot log in successfully with blank username and valid password', function () {
    LoginPage.enterPassword(this.loginData.userData.validPassword);
    LoginPage.clickLoginButton();
    expect(LoginPage.elements.errorMsg().should('be.visible'));
    LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Username is required');
    });
  })

  it('Verify that the user cannot log in successfully with valid username and blank password', function () {
    LoginPage.enterUsername(this.loginData.userData.validUsername);
    LoginPage.clickLoginButton();
    expect(LoginPage.elements.errorMsg().should('be.visible'));
    LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Password is required');
    });
  })
  it('Verify that the user cannot log in successfully with blank username and blank password', function () {
    LoginPage.clickLoginButton();
    expect(LoginPage.elements.errorMsg().should('be.visible'));
    LoginPage.elements.errorMsg().invoke('text').then((text) => {
      expect(text).to.include('Username is required');
    });
  })
  it('Verify that the user can log in successfully with valid username and valid password', function () {
    LoginPage.enterUsername(this.loginData.userData.validUsername);
    LoginPage.enterPassword(this.loginData.userData.validPassword);
    LoginPage.clickLoginButton();
    expect(HomePage.elements.appLogo().should('be.visible'));
    HomePage.elements.appLogo().invoke('text').then((text) => {
      expect(text).to.include('Swag Labs');
    });
  })
})
