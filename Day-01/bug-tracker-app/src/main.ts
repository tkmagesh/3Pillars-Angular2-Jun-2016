import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
//import { BugTrackerAppComponent, environment } from './app/';

import {BugTrackerAppComponent} from './app/bug-tracker.component';
import {environment} from './app/environment';




if (environment.production) {
  enableProdMode();
}

bootstrap(BugTrackerAppComponent);

