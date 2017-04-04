import { NgUniversalDemoPage } from './app.po';

describe('ng-universal-demo App', () => {
  let page: NgUniversalDemoPage;

  beforeEach(() => {
    page = new NgUniversalDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
