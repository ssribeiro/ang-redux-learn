import { AngPage } from './app.po';

describe('ang App', () => {
  let page: AngPage;

  beforeEach(() => {
    page = new AngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
