class CheckoutPage {
    get fullNameInput() { return element(by.id('fullNameInput')); }
    get addressInput() { return element(by.id('addressInput')); }
    get paymentMethodDropdown() { return element(by.id('paymentMethodDropdown')); }
    get placeOrderButton() { return element(by.id('placeOrderButton')); }

    async fillCheckoutDetails(fullName, address, paymentMethod) {
        await this.fullNameInput.tap();
        await this.fullNameInput.typeText(fullName);
        await this.addressInput.tap();
        await this.addressInput.typeText(address);
        await this.paymentMethodDropdown.tap();
        await element(by.text(paymentMethod)).tap();
    }

    async placeOrder() {
        await this.placeOrderButton.tap();
    }
}

export default new CheckoutPage();
