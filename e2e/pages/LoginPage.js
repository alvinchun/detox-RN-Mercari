class LoginPage {
    get emailInput() { return element(by.id('emailInput')); }
    get passwordInput() { return element(by.id('passwordInput')); }
    get loginButton() { return element(by.id('loginButton')); }
    get errorMessage() { return element(by.id('errorMessage')); }

    async login(email, password) {
        await this.emailInput.tap();
        await this.emailInput.typeText(email);
        await this.passwordInput.tap();
        await this.passwordInput.typeText(password);
        await this.loginButton.tap();
    }

    async getErrorMessageText() {
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();