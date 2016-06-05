import { Component, Input} from '@angular/core';
import { Bug } from '../models/Bug'

@Component({
	moduleId: module.id,
	selector: 'bug-item',
	templateUrl: 'bug-item.component.html',
	styleUrls : ['bug-item.component.css']
})
export class BugItem {
	@Input()
	data: Bug;

	toggle(bug: Bug): void {
		bug.toggle();
	}
}
