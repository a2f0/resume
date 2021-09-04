import * as Constants from '../../constants';
import SvgPage from '../pageobjects/svg.page';
import assert from 'assert';
import path from 'path';
import waitForFileExists from '../../library/fs';

describe('SVG Resume', () => {
  it('should load', async () => {
    await SvgPage.open();
    await expect(SvgPage.svgResume).toBeExisting();
  });

  it('should work with the light/dark theme switcher', async () => {
    await SvgPage.open();
    expect(SvgPage.leftPartition).toBeExisting();
    const leftPartition = await SvgPage.leftPartition;
    const viewMenuButton = await SvgPage.viewMenuButton;
    const viewMenuItems = await SvgPage.viewMenuItems;
    const darkBackgroundMenuOption = await SvgPage.darkBackgroundMenuOption;
    const lightBackgroundMenuOption = await SvgPage.lightBackgroundMenuOption;
    let leftPartitionColor = await leftPartition.getCSSProperty('fill');
    assert.strictEqual(
      leftPartitionColor.parsed.hex?.toUpperCase(),
      Constants.DARK
    );
    viewMenuButton.click();
    await viewMenuItems.waitForDisplayed();
    lightBackgroundMenuOption.click();

    await leftPartition.waitUntil(
      async () => {
        leftPartitionColor = await leftPartition.getCSSProperty('fill');
        return leftPartitionColor.parsed.hex?.toUpperCase() === Constants.LIGHT;
      },
      {
        timeout: 30000,
        timeoutMsg: 'expected partition to be light after 3s',
      }
    );

    viewMenuButton.click();
    await viewMenuItems.waitForDisplayed();
    darkBackgroundMenuOption.click();

    await leftPartition.waitUntil(
      async () => {
        leftPartitionColor = await leftPartition.getCSSProperty('fill');
        return leftPartitionColor.parsed.hex?.toUpperCase() === Constants.DARK;
      },
      {
        timeout: 30000,
        timeoutMsg: 'expected partition to be dark after 3s',
      }
    );
  });

  it('should download an svg', async () => {
    await SvgPage.open();
    expect(SvgPage.fileMenuButton).toBeExisting();
    expect(SvgPage.fileMenuItems).toBeExisting();
    const fileMenuButton = await SvgPage.fileMenuButton;
    const fileMenuItems = await SvgPage.fileMenuItems;
    const downloadSvgMenuOption = await SvgPage.downloadSvgMenuOption;
    let fileVisibility;
    let svgDownloadVisibility;
    // Click the File menu to show it, then click it again to hide it.
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'hidden');
    svgDownloadVisibility = await downloadSvgMenuOption.getCSSProperty(
      'visibility'
    );
    assert.strictEqual(svgDownloadVisibility.value, 'hidden');
    fileMenuButton.click();
    fileVisibility = await fileMenuItems.getCSSProperty('visibility');
    assert.strictEqual(fileVisibility.value, 'visible');
    svgDownloadVisibility = await downloadSvgMenuOption.getCSSProperty(
      'visibility'
    );
    assert.strictEqual(svgDownloadVisibility.value, 'visible');
    downloadSvgMenuOption.click();
    const filePath = path.join(
      Constants.TEST_DOWNLOAD_DIR,
      'dan.sullivan.resume.svg'
    );
    await browser.call(async () => {
      return await waitForFileExists(filePath, 3000);
    });
  });
});
