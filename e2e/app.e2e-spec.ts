import { GasketPage } from './app.po';

describe('gasket App', () => {
  let page: GasketPage;

  beforeEach(() => {
    page = new GasketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
