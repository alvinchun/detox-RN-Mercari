describe('Find Elements by Text', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true, 
      permissions: { notifications: 'YES', location: 'always' }
    });
    await new Promise(resolve => setTimeout(resolve, 2000));  // Wait for 2 seconds after launching the app
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await new Promise(resolve => setTimeout(resolve, 1000));  // Wait for 1 second after reloading
  });

  it("should find the element with id 'UniqueId345' to be visible", async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));  // Wait for 3 seconds before checking visibility
    await expect(element(by.id('UniqueId345'))).toBeVisible();
  });
});
  // it('should find the welcome text', async () => {
  //   await expect(element(by.text('Welcome to Detox Testing!'))).toBeVisible().withTimeout(3000);
  // });

  // it('should type text and verify output', async () => {
  //   await element(by.text('Type something...')).typeText('Detox Test');
  //   await expect(element(by.text('You typed: Detox Test'))).toBeVisible().withTimeout(3000);
  // });

  // it('should clear text after pressing Reset button', async () => {
  //   await element(by.text('Type something...')).typeText('Reset Me');
  //   await element(by.text('Reset')).tap();
  //   await expect(element(by.text('Enter something above'))).toBeVisible().withTimeout(3000);
  // });

  // it('should show alert when Submit button is tapped', async () => {
  //   await element(by.text('Type something...')).typeText('Submit Test');
  //   await element(by.text('Submit')).tap();
  //   await expect(element(by.text('Submitted: Submit Test'))).toBeVisible().withTimeout(3000);
  //   await device.pressBack();  // Dismiss the alert popup
  // });

  // it('should scroll down and find the reset button', async () => {
  //   await element(by.text('Reset')).scroll(200, 'down');
  //   await expect(element(by.text('Reset'))).toBeVisible().withTimeout(3000);
  // });


