import { Component, OnInit  } from '@angular/core';
import { BugItem } from './bug-item/bug-item.component';
import { Bug } from './models/Bug';
import { ClosedCount } from './shared/closedCount.pipe';

@Component({
  moduleId: module.id,
  selector: 'bug-tracker-app',
  templateUrl: 'bug-tracker.component.html',
  styleUrls: ['bug-tracker.component.css'],
  directives : [BugItem],
  pipes : [ClosedCount]
})
export class BugTrackerAppComponent {
	title: string = '';
	bugs: Bug[] = [];
	newBugName: string = '';

  	addNew() :void{

			var newBugId = this.bugs.length ? this.bugs.reduce((b1, b2) => b1.id > b2.id ? b1 : b2 ).id + 1 : 1;
			let newBug = new Bug(newBugId, this.newBugName, false);
			this.bugs.push(newBug);
  	}
  	
  

  	ngOnInit(){
			this.bugs.push(new Bug(1, "Object reference not found", false));
			this.bugs.push(new Bug(2, "Server communication failure", true));
  	}
}
 
