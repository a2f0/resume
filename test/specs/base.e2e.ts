import Base from '../pageobjects/base';

describe('File Menu Button', () => {
  it('should be present', async () => {
    const BasePage = new Base();
    await BasePage.open('');
    await expect(BasePage.fileMenuButton).toBeExisting();
  });
});

describe('View Menu Button', () => {
  it('should be present', async () => {
    const BasePage = new Base();
    await BasePage.open('');
    await expect(BasePage.viewMenuButton).toBeExisting();
  });
});
