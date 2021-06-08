import * as Constants from '../../constants';
import SvgPage from '../pageobjects/svg.page';
import assert from 'assert';

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
    assert.strictEqual(leftPartitionColor.parsed.hex, Constants.DARK);
    viewMenuButton.click();
    await viewMenuItems.waitForDisplayed();
    lightBackgroundMenuOption.click();

    await leftPartition.waitUntil(
      async () => {
        leftPartitionColor = await leftPartition.getCSSProperty('fill');
        return leftPartitionColor.parsed.hex === Constants.LIGHT;
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
        return leftPartitionColor.parsed.hex === Constants.DARK;
      },
      {
        timeout: 30000,
        timeoutMsg: 'expected partition to be dark after 3s',
      }
    );
  });
});
