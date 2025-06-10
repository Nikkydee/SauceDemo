class LoginPage {
    elements = {
        pageLogo: () => cy.get('[data-test="login-button"]'),
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]'),
        closeError: () => cy.get('[data-test="error-button"]')
    }

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }
    getErrorMsg() {
        this.elements.errorMsg()
    }
    closeError() {
        this.elements.closeError().click();
    }

}
export default new LoginPage();