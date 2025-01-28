class CartPage {
    get cartItems() { return element(by.id('cartItems')); }
    get checkoutButton() { return element(by.id('checkoutButton')); }
    get totalPrice() { return element(by.id('totalPrice')); }

    async getCartItemCount() {
        return await this.cartItems.atIndex(0).getAttributes();
    }

    async proceedToCheckout() {
        await this.checkoutButton.tap();
    }
}

export default new CartPage();