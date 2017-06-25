import { AngularRxPage } from './app.po';

describe('angular-rx App', () => {
  let page: AngularRxPage;

  beforeEach(() => {
    page = new AngularRxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
