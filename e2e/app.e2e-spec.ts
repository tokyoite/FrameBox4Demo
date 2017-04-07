import { FrameBox4Page } from './app.po';

describe('frame-box4 App', () => {
  let page: FrameBox4Page;

  beforeEach(() => {
    page = new FrameBox4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
