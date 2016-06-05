import { Component, Input} from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from '../services/BugStorageService';

@Component({
	moduleId: module.id,
	selector: 'bug-item',
	templateUrl: 'bug-item.component.html',
	styleUrls : ['bug-item.component.css']
})
export class BugItem {
	@Input()
	data: Bug;

	constructor(private _bugStorageService : BugStorageService){
		console.log(this._bugStorageService.id);
	}
	toggle(bug: Bug): void {
		bug.toggle();
	}
}
