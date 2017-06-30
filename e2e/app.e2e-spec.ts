import { ShopReceitasPage } from './app.po';

describe('shop-receitas App', () => {
  let page: ShopReceitasPage;

  beforeEach(() => {
    page = new ShopReceitasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
