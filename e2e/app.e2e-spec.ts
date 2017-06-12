import { Vega4Page } from './app.po';

describe('vega4 App', () => {
  let page: Vega4Page;

  beforeEach(() => {
    page = new Vega4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
