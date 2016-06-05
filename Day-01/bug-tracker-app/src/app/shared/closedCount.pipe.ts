import { Pipe, PipeTransform} from '@angular/core';
import { Bug } from '../models/Bug';
@Pipe({
	name : 'closedCount',
	pure : false
})
export class ClosedCount implements PipeTransform{
	transform(value : Bug[], args){
		
		return value.reduce((prevResult, bug) => {
			return bug.isClosed ? ++prevResult : prevResult
		}, 0);
	}
}