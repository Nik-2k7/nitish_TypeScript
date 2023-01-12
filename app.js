console.log("Welcome to TypeScript");
// interface OS {
//     name: String;
//     language: String;
// }
// const desert = (type: OS): void => {
//   console.log('Android ' + type.name + ' has ' + type.language + ' language');
// };
// const nougat = {
//   name: 'N', 
//   language: 'Java'
// }
// desert(nougat);
// class Car {
//     model: String;
//     doors: Number;
//     isElectric: Boolean;
//     color: String;
//     fuelType: String;
//     engines: Number;
//     constructor(model: String, doors: Number, isElectric: Boolean, color: String, fuelType:String, engines: Number){
//         this.model = model;
//         this.doors = doors;
//         this.isElectric = isElectric;
//         this.color = color;
//         this.fuelType = fuelType;
//         this.engines = engines;
//     }
//     make(): void {
//         console.log(`I want to have a car of ${this.model} which has ${this.doors} doors and which is an electric ${this.isElectric}, the color will be ${this.color} and fuel type will be ${this.fuelType} type and having engine capacity of ${this.engines}cc` );
//     }
// }
// let newCar = new Car('Lamborghini', 2, true, 'ZedBlack', 'Petrol', 6498);
// newCar.make();
// // Arithmetic operation on two numbers
// // addition
// function addNumbers(a: number, b: number) { 
//     return a + b; 
// } 
// var sum: number = addNumbers(10, 15) 
// console.log('Sum of the two numbers is: ' +sum); 
// // Subtraction
// function subtractNumbers(a: number, b: number) { 
//     return a - b; 
// } 
// var Difference: number = subtractNumbers(10, 15) 
// console.log('Difference of the two numbers is: ' +Difference); 
// // Multiplication
// function multiplyNumbers(a: number, b: number) { 
//     return a * b; 
// } 
// var sum: number = multiplyNumbers(10, 15) 
// console.log('Multiplication of the two numbers is: ' +sum); 
// // Divison
// function divideNumbers(a: number, b: number) { 
//     return a / b; 
// } 
// var sum: number = divideNumbers(10, 15) 
// console.log('Division of the two numbers is: ' +sum); 
// // Type Annotations in TypeScript
// var age: number = 32; // number variable
// var tName: string = "John";// string variable
// var isUpdated: boolean = true;// Boolean variable
// function display(id:number, tName:string)
// {
//     console.log(`My name is ${tName}. My Age is ${id}`)
// }
// display(32, "John");
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
// var numb1:number = 1; 
// function varDeclaration() { 
//     var num2:number = 2; 
//     var num3: number;
//     if (num2 > numb1) { 
//         num3 = 3;
//         num3++; 
//     } 
//     while(numb1 < num2) { 
//         var num4: number = 4;
//         numb1++;
//     }
//     console.log(numb1); //2
//     console.log(num2); //2 
//     console.log(num3); //4
//     console.log(num4); //4
// }
// varDeclaration();
// let str: string = 'TypeScript';
// str.indexOf('T'); // returns 0
// str.indexOf('p'); // returns 2
// str.indexOf('e'); // returns 3
// str.indexOf('T', 1); // returns -1
// str.indexOf('t', 1); // returns 9
// let fruits: string[] = ['Apple', 'Orange', 'Banana']; 
// for(var index in fruits)
// { 
//     console.log(fruits[index]);  // output: Apple Orange Banana
// }
// for(var i = 0; i < fruits.length; i++)
// { 
//     console.log(fruits[i]); // output: Apple Orange Banana
// }
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
// let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
//   }
//   console.log(PrintMedia)
//   function displayType(code: (string | number | boolean))
// {
//     if(typeof(code) === "number")
//         console.log('Code is number.')
//     else if(typeof(code) === "boolean")  //I have added a new type boolean and executed it too and it worked.
//         console.log('Code is true.')
//     else if(typeof(code) === "string")
//         console.log('Code is string.')
// }
// displayType(123); // Output: Code is number.
// displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
// let arr: any[] = ["John", 212, true]; 
// arr.push("Smith"); 
// arr.sort();
// console.log(arr); //Output: [ 'John', 212, true, 'Smith' ]  // Practicing type: ANY and 'sort' array type
// function throwError(errorMsg: string): never { 
//     throw new Error(errorMsg); 
// } 
// function keepProcessing(): never { 
//     while (true) { 
//  console.log('I always does something and never ends.')
// }
// }
// var a = "some text";
// var b = "false";
// a = b; 
// var arr = [0, 1, "test"]; 
// arr.push("str") // OK
// arr.push(true);
// interface Employee { 
//     name: string; 
//     code: number; 
// } 
// let employee = <Employee> { }; 
// employee.name = "John"; // OK
// employee.code = 123; // OK
// let x: number = 10, y = 20;
// if (x > y) 
// {
//     console.log('x is greater than y.');
// } 
// else if (x < y)
// {
//     console.log('x is less than y.'); //This will be executed
// }
// else if (x == y) 
// {
//     console.log('x is equal to y');
// }
// let x: number = 10, y = 20;             //Ternary operaror "?"
// x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')
// let day : number = 7;               // Practicing switch Type
// switch (day) {
//     case 0:
//         console.log("It is a Sunday.");
//         break;
//     case 1:
//         console.log("It is a Monday.");
//         break;
//     case 2:
//         console.log("It is a Tuesday.");
//         break;
//     case 3:
//         console.log("It is a Wednesday.");
//         break;
//     case 4:
//         console.log("It is a Thursday.");
//         break;
//     case 5:
//         console.log("It is a Friday.");
//         break;
//     case 6:
//         console.log("It is a Saturday.");
//         break;
//     default:
//         console.log("No such day exists!");
//         break;
// }
// let x = 10, y = 5;                  //Switch example
// switch (x-y) {
//     case 0:
//         console.log("Result: 0");
//         break;
//     case 5:
//         console.log("Result: 5");
//         break;
//     case 10:
//         console.log("Result: 10");
//         break;
// }
var string = "Hello World";
for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
    var char = string_1[_i];
    console.log(char); // prints chars: H e l l o  W o r l d
}
