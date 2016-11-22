import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BugTrackerAppComponent } from '../app/bug-tracker.component';

beforeEachProviders(() => [BugTrackerAppComponent]);

/*describe('App: BugTracker', () => {
  it('should create the app',
      inject([BugTrackerAppComponent], (app: BugTrackerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bug-tracker works!\'',
      inject([BugTrackerAppComponent], (app: BugTrackerAppComponent) => {
    expect(app.title).toEqual('bug-tracker works!');
  }));
});*/
