import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Add Multiple Products to Cart Test', () => {
    beforeAll(async () => {
        await device.launchApp();
        await LoginPage.login('testuser@example.com', 'password123');
    });

    it('should add multiple products to the cart and verify cart count', async () => {
        await HomePage.searchProduct('Laptop');
        await ProductPage.addProductToCart();
        
        await HomePage.searchProduct('Headphones');
        await ProductPage.addProductToCart();
        
        await HomePage.goToCart();
        
        const cartItemCount = await CartPage.getCartItemCount();
        expect(cartItemCount.length).toBeGreaterThan(1);
    });
});
