import {Component, Output, EventEmitter} from '@angular/core';
import {BugStorageService} from '../services/BugStorageService';
import {Bug} from '../models/Bug';

@Component({
	moduleId : module.id,
	selector : 'bug-editor',
	templateUrl : 'bug-editor.component.html'
})
export class BugEditor{

	@Output() 
	bugAdded: EventEmitter<Bug> = new EventEmitter<Bug>(); 

	newBugName: string = '';
	
	constructor(private _bugStorageService : BugStorageService){

	}

	addNew(): void {
		let newBug = this._bugStorageService.createNew(this.newBugName);
		//notify parent component about the newly added bug
		this.bugAdded.emit(newBug);
	}
}