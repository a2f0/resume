import {BasePage} from '../pageobjects/base';
import assert from 'assert';

describe('Menu Behavior', () => {
  it('should show/hide based on clicking and hoveing', async () => {
    await BasePage.open('');
    expect(BasePage.fileMenuButton).toBeExisting();
    expect(BasePage.fileMenuItems).toBeExisting();
    const fileMenuButton = await BasePage.fileMenuButton;
    const fileMenuItems = await BasePage.fileMenuItems;
    const viewMenuButton = await BasePage.viewMenuButton;
    const viewMenuItems = await BasePage.viewMenuItems;
    let fileVisibility;
    let viewVisibility;
    // Click the File menu to show it, then click it again to hide it.
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');
    fileMenuButton.click();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'visible');
    fileMenuButton.click();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');

    // Click the View menu to show it, then click it again to hide it.
    viewVisibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(viewVisibility.value, 'hidden');
    viewMenuButton.click();
    viewVisibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(viewVisibility.value, 'visible');
    viewMenuButton.click();
    viewVisibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(viewVisibility.value, 'hidden');

    // Click the File menu to show it, then hover the View menu to hide the File menu.
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');
    fileMenuButton.click();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'visible');
    await viewMenuButton.moveTo();
    await viewMenuItems.waitForDisplayed();
    viewVisibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(viewVisibility.value, 'visible');
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');

    //Hover back to the File menu to show it, and make sure the View menu hides.
    await fileMenuButton.moveTo();
    await fileMenuButton.waitForDisplayed();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'visible');
    viewVisibility = await viewMenuItems.getCSSProperty('visibility');
    assert.strictEqual(viewVisibility.value, 'hidden');
  });
});
