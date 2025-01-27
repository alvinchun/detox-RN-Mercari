class ProductPage {
    get productTitle() { return element(by.id('productTitle')); }
    get addToCartButton() { return element(by.id('addToCartButton')); }
    get productPrice() { return element(by.id('productPrice')); }

    async addProductToCart() {
        await this.addToCartButton.tap();
    }

    async getProductTitleText() {
        return await this.productTitle.getText();
    }

    async getProductPriceText() {
        return await this.productPrice.getText();
    }
}

export default new ProductPage();