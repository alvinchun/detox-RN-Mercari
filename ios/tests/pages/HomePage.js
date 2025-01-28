class HomePage {
    get searchInput() { return element(by.id('searchInput')); }
    get categoryList() { return element(by.id('categoryList')); }
    get cartIcon() { return element(by.id('cartIcon')); }

    async searchProduct(productName) {
        await this.searchInput.tap();
        await this.searchInput.typeText(productName);
        await device.pressEnter();
    }

    async selectCategory(categoryName) {
        await element(by.text(categoryName)).tap();
    }

    async goToCart() {
        await this.cartIcon.tap();
    }
}

export default new HomePage();