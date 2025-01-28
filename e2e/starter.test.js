import { device, element, by } from 'detox';

describe('App Test Suite', () => {
  beforeAll(async () => {
    await device.launchApp({     newInstance: true,
      launchArgs: { DETOX_DEBUG_SYNCHRONIZATION: 5000 }});
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should display the welcome text', async () => {
    await expect(element(by.id('UniqueId345'))).toBeVisible();
  }, 100000)
});


