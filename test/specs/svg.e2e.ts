import * as Constants from '../../constants';
import SvgPage from '../pageobjects/svg.page';
import assert from 'assert';
import path from 'path';
import waitForFileExists from '../lib/fs';

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
    const darkThemeMenuOption = await SvgPage.darkThemeMenuOption;
    const lightThemeMenuOption = await SvgPage.lightThemeMenuOption;
    let leftPartitionColor = await leftPartition.getCSSProperty('fill');
    assert.strictEqual(
      leftPartitionColor.parsed.hex?.toUpperCase(),
      Constants.DARK_THEME_BACKGROUND
    );
    viewMenuButton.click();
    await viewMenuItems.waitForDisplayed();
    lightThemeMenuOption.click();

    await leftPartition.waitUntil(
      async () => {
        leftPartitionColor = await leftPartition.getCSSProperty('fill');
        return (
          leftPartitionColor.parsed.hex?.toUpperCase() ===
          Constants.LIGHT_THEME_BACKGROUND
        );
      },
      {
        timeout: 30000,
        timeoutMsg: 'expected partition to be light after 3s',
      }
    );

    viewMenuButton.click();
    await viewMenuItems.waitForDisplayed();
    darkThemeMenuOption.click();

    await leftPartition.waitUntil(
      async () => {
        leftPartitionColor = await leftPartition.getCSSProperty('fill');
        return (
          leftPartitionColor.parsed.hex?.toUpperCase() ===
          Constants.DARK_THEME_BACKGROUND
        );
      },
      {
        timeout: 30000,
        timeoutMsg: 'expected partition to be dark after 3s',
      }
    );
  });

  it('should download an svg', async () => {
    await SvgPage.open();
    await expect(SvgPage.fileMenuButton).toBeExisting();
    await expect(SvgPage.fileMenuItems).toBeExisting();
    await expect(SvgPage.fileMenuItems).not.toBeDisplayed();
    await expect(SvgPage.downloadSvgMenuOption).not.toBeDisplayed();
    await SvgPage.fileMenuButton.click();
    await expect(SvgPage.fileMenuItems).toBeDisplayed();
    await expect(SvgPage.downloadSvgMenuOption).toBeDisplayed();
    await SvgPage.downloadSvgMenuOption.click();
    const filePath = path.join(
      Constants.TEST_DOWNLOAD_DIR,
      'dan.sullivan.resume.svg'
    );
    await browser.call(async () => {
      return await waitForFileExists(filePath, 3000);
    });
  });
});
