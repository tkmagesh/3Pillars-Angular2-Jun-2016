import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

@Injectable()
export class BugStorageService{
	storage: any = window.localStorage;
	__maxBugId: number = 0;
	id = 0;
	getAll (){
		let result = [];
		for (let i = 0; i < this.storage.length; i++){
			var dataAsStr = this.storage.getItem(this.storage.key(i));
			var bugData = JSON.parse(dataAsStr);
			var bug = new Bug(bugData.id, bugData.name, bugData.isClosed);
			result.push(bug);
			this.__maxBugId = this.__maxBugId > bug.id ? this.__maxBugId : bug.id;
		}
		return result;
	}

	createNew(bugName) : Bug{
		var newBug = new Bug(++this.__maxBugId, bugName, false);
		this.storage.setItem(newBug.id, JSON.stringify(newBug));
		return newBug;
	}

	save(bug) : void{
		this.storage.setItem(bug.id, JSON.stringify(bug));
	}

	remove(bug) : void {
		this.storage.removeItem(bug.id);
	}
}