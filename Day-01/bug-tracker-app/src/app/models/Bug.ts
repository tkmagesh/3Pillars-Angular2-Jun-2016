export class Bug{
	constructor(public id:number, public name:string, public isClosed:boolean){

	}
	toggle() : void{
		this.isClosed = !this.isClosed;
	}
} 