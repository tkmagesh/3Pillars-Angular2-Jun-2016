import { Component, OnInit  } from '@angular/core';
import { BugItem } from './bug-item/bug-item.component';
import { Bug } from './models/Bug';
import { ClosedCount } from './shared/closedCount.pipe';
import { BugStorageService } from './services/BugStorageService';
import { BugEditor} from './bug-editor/bug-editor.component';

@Component({
  moduleId: module.id,
  selector: 'bug-tracker-app',
  templateUrl: 'bug-tracker.component.html',
  styleUrls: ['bug-tracker.component.css'],
  directives : [BugItem, BugEditor],
  pipes : [ClosedCount],
  providers : [BugStorageService]
})
export class BugTrackerAppComponent {
	bugs: Bug[] = [];
    constructor(private _bugService : BugStorageService){
        
    }
    onBugAdded(newBug : Bug) : void{
      this.bugs.push(newBug);
    }
  	ngOnInit(){
      this.bugs = this._bugService.getAll();
			
  	}
}
 
