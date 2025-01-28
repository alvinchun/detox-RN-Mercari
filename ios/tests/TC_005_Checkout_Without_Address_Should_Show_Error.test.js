import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

describe('Checkout Validation Test', () => {
    beforeAll(async () => {
        await device.launchApp();
        await LoginPage.login('testuser@example.com', 'password123');
        await HomePage.searchProduct('Smartwatch');
        await ProductPage.addProductToCart();
        await HomePage.goToCart();
        await CartPage.proceedToCheckout();
    });

    it('should show an error when trying to place an order without an address', async () => {
        await CheckoutPage.fillCheckoutDetails('John Doe', '', 'PayPal');
        await CheckoutPage.placeOrder();
        await expect(element(by.text('Address is required'))).toBeVisible();
    });
});