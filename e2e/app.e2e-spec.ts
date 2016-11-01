import { EdNg2CliDfwPage } from './app.po';

describe('ed-ng2-cli-dfw App', function() {
  let page: EdNg2CliDfwPage;

  beforeEach(() => {
    page = new EdNg2CliDfwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
