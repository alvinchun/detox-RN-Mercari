import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

describe('E-commerce App Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should login, search, add product to cart, and complete checkout', async () => {
        await LoginPage.login('testuser@example.com', 'password123');
        await expect(element(by.text('Welcome'))).toBeVisible();

        await HomePage.searchProduct('Laptop');
        await ProductPage.addProductToCart();
        await HomePage.goToCart();

        await expect(element(by.id('cartItems'))).toBeVisible();
        await CartPage.proceedToCheckout();

        await CheckoutPage.fillCheckoutDetails('John Doe', '123 Test St', 'Credit Card');
        await CheckoutPage.placeOrder();

        await expect(element(by.text('Order Confirmed'))).toBeVisible();
    });
});