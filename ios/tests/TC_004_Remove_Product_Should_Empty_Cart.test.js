import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

describe('Remove Product from Cart Test', () => {
    beforeAll(async () => {
        await device.launchApp();
        await LoginPage.login('testuser@example.com', 'password123');
        await HomePage.searchProduct('Tablet');
        await ProductPage.addProductToCart();
        await HomePage.goToCart();
    });

    it('should remove a product from the cart', async () => {
        await element(by.id('removeFromCartButton')).tap();
        await expect(element(by.text('No items in cart'))).toBeVisible();
    });
});