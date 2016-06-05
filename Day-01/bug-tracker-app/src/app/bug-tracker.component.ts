import { Component, OnInit  } from '@angular/core';
import { BugItem } from './bug-item/bug-item.component';
import { Bug } from './models/Bug';
import { ClosedCount } from './shared/closedCount.pipe';
import { BugStorageService } from './services/BugStorageService'

@Component({
  moduleId: module.id,
  selector: 'bug-tracker-app',
  templateUrl: 'bug-tracker.component.html',
  styleUrls: ['bug-tracker.component.css'],
  directives : [BugItem],
  pipes : [ClosedCount],
  providers : [BugStorageService]
})
export class BugTrackerAppComponent {
	title: string = '';
	bugs: Bug[] = [];
	newBugName: string = '';

  	addNew() :void{
      let newBug = this._bugService.createNew(this.newBugName);
			this.bugs.push(newBug);
  	}
  	
    constructor(private _bugService : BugStorageService){
        this._bugService.id = 100;
    }

  	ngOnInit(){
      this.bugs = this._bugService.getAll();
			
  	}
}
 
