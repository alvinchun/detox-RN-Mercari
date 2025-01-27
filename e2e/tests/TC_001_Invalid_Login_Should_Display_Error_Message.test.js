import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Invalid Login Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should display an error message for invalid credentials', async () => {
        await LoginPage.login('invalid@example.com', 'wrongpassword');
        await expect(LoginPage.errorMessage).toBeVisible();
        await expect(LoginPage.errorMessage).toHaveText('Invalid email or password');
    });
});
