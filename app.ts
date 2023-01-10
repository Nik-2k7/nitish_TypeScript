console.log("Welcome to TypeScript");
interface OS {
    name: String;
    language: String;
}
const desert = (type: OS): void => {
  console.log('Android ' + type.name + ' has ' + type.language + ' language');
};
const nougat = {
  name: 'N', 
  language: 'Java'
}
desert(nougat);
class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    color: String;
    fuelType: String;
    engines: Number;
    constructor(model: String, doors: Number, isElectric: Boolean, color: String, fuelType:String, engines: Number){
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.color = color;
        this.fuelType = fuelType;
        this.engines = engines;
    }

    make(): void {
        console.log(`I want to have a car of ${this.model} which has ${this.doors} doors and which is an electric ${this.isElectric}, the color will be ${this.color} and fuel type will be ${this.fuelType} type and having engine capacity of ${this.engines}cc` );
    }
}
let newCar = new Car('Lamborghini', 2, true, 'ZedBlack', 'Petrol', 6498);
newCar.make();

   
// Arithmetic operation on two numbers
// addition
function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 
console.log('Sum of the two numbers is: ' +sum); 
// Subtraction
function subtractNumbers(a: number, b: number) { 
    return a - b; 
} 

var Difference: number = subtractNumbers(10, 15) 

console.log('Difference of the two numbers is: ' +Difference); 
// Multiplication
function multiplyNumbers(a: number, b: number) { 
    return a * b; 
} 

var sum: number = multiplyNumbers(10, 15) 

console.log('Multiplication of the two numbers is: ' +sum); 
// Divison
function divideNumbers(a: number, b: number) { 
    return a / b; 
} 

var sum: number = divideNumbers(10, 15) 

console.log('Division of the two numbers is: ' +sum); 

// Type Annotations in TypeScript
var age: number = 32; // number variable
var tName: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable
function display(id:number, tName:string)
{
    console.log(`My name is ${tName}. My Age is ${id}`)
}
display(32, "John");

// letDeclaration();
// let num1:number = 1; 
    
// function letDeclaration() { 
//     let num2:number = 2; 

//     if (num2 > num1) { 
//         let num3: number = 3;
//         num3++; 
//     } 

//     while(num1 < num2) { 
//         let num4: number = 4;
//         num1++;
//     }

//     console.log(num1); //OK
//     console.log(num2); //OK 
//     // console.log(num3); //Compiler Error: Cannot find name 'num3'
//     // console.log(num4); //Compiler Error: Cannot find name 'num4'
// }

// var declaration
var numb1:number = 1; 
    
function varDeclaration() { 
    var num2:number = 2; 
    var num3: number;
    if (num2 > numb1) { 
        num3 = 3;
        num3++; 
    } 

    while(numb1 < num2) { 
        var num4: number = 4;
        numb1++;
    }

    console.log(numb1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}

varDeclaration();