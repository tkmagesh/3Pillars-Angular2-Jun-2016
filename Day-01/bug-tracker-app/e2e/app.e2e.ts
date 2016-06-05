import { BugTrackerPage } from './app.po';

describe('bug-tracker App', function() {
  let page: BugTrackerPage;

  beforeEach(() => {
    page = new BugTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bug-tracker works!');
  });
});
