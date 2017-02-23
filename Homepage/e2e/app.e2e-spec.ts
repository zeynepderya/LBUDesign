import { WAWProjectPage } from './app.po';

describe('waw-project App', function() {
  let page: WAWProjectPage;

  beforeEach(() => {
    page = new WAWProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
