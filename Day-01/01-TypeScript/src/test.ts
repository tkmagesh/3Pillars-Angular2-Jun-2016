function greet(){
	console.log('Welcome to typescript and feel typesafe!');
}
greet();

function add(x:number ,y:number) : number{
	return x + y;
} 
var x: number = 100, 
	y: number = 200;

class Employee implements printable{
	target = "console";
	constructor(public id:number, public name:string, public salary:number){
		
	} 
	print(): void {
		console.log(this.id, this.name, this.salary);
	}
}

class FullTimeEmployee extends Employee{
	constructor( id:number,  name:string,  salary:number, public benefits:string){
		super(id, name, salary);
		
	}

	print() : void{
		console.log(`id=${this.id}, 
			name=${this.name}, 
			salary=${this.salary}, 
			benefits=${this.benefits}`);
	}
}

interface printable{
	target: any;
	print(): void;
}

var e1 = new FullTimeEmployee(100, 'Magesh', 10000, 'sodexo');

e1.print()

for (let i = 0; i < 10; i++){

}
const c1: number = 10;

let numbers: number[] = [10, 4, 8, 15, 30];

console.log('finding the max');

/*
var maxNumber = numbers.reduce(function(prevValue, currentValue) {
	console.log(prevValue, currentValue);
	return prevValue > currentValue ? prevValue : currentValue;
}, Number.MIN_VALUE);
*/

var maxNumber = numbers.reduce(
	(prevValue, currentValue) => prevValue > currentValue ? prevValue : currentValue, 
	Number.MIN_VALUE);

console.log(`max = ${maxNumber}`);

















