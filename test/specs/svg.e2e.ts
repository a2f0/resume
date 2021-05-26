import SvgPage from '../pageobjects/svg.page';

describe('SVG Resume', () => {
  it('should load', async () => {
    await SvgPage.open();
    await expect(SvgPage.svgResume).toBeExisting();
  });
});
