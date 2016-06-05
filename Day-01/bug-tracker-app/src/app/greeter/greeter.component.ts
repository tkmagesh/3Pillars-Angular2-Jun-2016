import {Component} from "@angular/core";
@Component({
	moduleId: module.id,
	selector : 'greeter',
	templateUrl : 'greeter.component.html'
})
export class greeter{
	message: string = '[Default message]';
	name: string = 'Magesh';

	onGreet() {
		this.message = 'Hi ' + this.name + 'Have a nice day!';
	}
}
