import Base from '../pageobjects/base';

describe('File Menu', () => {
  it('should work', async () => {
    const BasePage = new Base();
    await BasePage.open('');
    await expect(BasePage.fileMenuButton).toBeExisting();
    await expect(BasePage.fileMenuItems).toBeExisting();
  });
});

describe('View Menu', () => {
  it('should work', async () => {
    const BasePage = new Base();
    await BasePage.open('');
    await expect(BasePage.viewMenuButton).toBeExisting();
    await expect(BasePage.viewMenuItems).toBeExisting();
  });
});
