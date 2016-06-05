import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Bug } from '../models/Bug';
import { Injectable } from '@angular/core';

@Injectable()
export class BugHttpService{
	constructor(private _http: Http) { 
		console.log('BugHttpService');
	}

    getBugs() {
		console.log('getBugs triggered', this._http);
        return this._http.get("http://localhost:3000/bugs")
			.map((response: Response) => 
				response.json().map(data => new Bug(data.id, data.name, data.isClosed)))
				.do(data => console.log('All: ' + JSON.stringify(data)))
            /*.catch(this.handleError);*/
    }
    handleError(){
		console.log("http service error", arguments);
    }
}