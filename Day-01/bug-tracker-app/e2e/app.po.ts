export class BugTrackerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bug-tracker-app h1')).getText();
  }
}
