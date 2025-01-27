import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Product Search Test', () => {
    beforeAll(async () => {
        await device.launchApp();
        await LoginPage.login('testuser@example.com', 'password123');
    });

    it('should search for a product and display results', async () => {
        await HomePage.searchProduct('Smartphone');
        await expect(element(by.text('Smartphone'))).toBeVisible();
    });
});
