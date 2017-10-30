import { TableEditPage } from './app.po';

describe('table-edit App', () => {
  let page: TableEditPage;

  beforeEach(() => {
    page = new TableEditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
