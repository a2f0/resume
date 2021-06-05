import {BasePage} from '../pageobjects/base';
import assert from 'assert';

describe('File Menu', () => {
  it('should show/hide based on clicking', async () => {
    await BasePage.open('');
    expect(BasePage.fileMenuButton).toBeExisting();
    expect(BasePage.fileMenuItems).toBeExisting();
    const fileMenuButton = await BasePage.fileMenuButton;
    const fileMenuItems = await BasePage.fileMenuItems;
    let visibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'hidden');
    fileMenuButton.click();
    visibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'visible');
    fileMenuButton.click();
    visibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'hidden');
  });
});

describe('View Menu', () => {
  it('should show/hide based on clicking', async () => {
    await BasePage.open('');
    expect(BasePage.viewMenuButton).toBeExisting();
    expect(BasePage.viewMenuItems).toBeExisting();
    const viewMenuButton = await BasePage.viewMenuButton;
    const viewMenuItems = await BasePage.viewMenuItems;
    let visibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'hidden');
    viewMenuButton.click();
    visibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'visible');
    viewMenuButton.click();
    visibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(visibility.value, 'hidden');
  });
});
