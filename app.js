console.log("Welcome to TypeScript");
var desert = function (type) {
    console.log('Android ' + type.name + ' has ' + type.language + ' language');
};
var nougat = {
    name: 'N',
    language: 'Java'
};
desert(nougat);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric, color, fuelType, engines) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.color = color;
        this.fuelType = fuelType;
        this.engines = engines;
    }
    Car.prototype.make = function () {
        console.log("I want to have a car of ".concat(this.model, " which has ").concat(this.doors, " doors and which is an electric ").concat(this.isElectric, ", the color will be ").concat(this.color, " and fuel type will be ").concat(this.fuelType, " type and having engine capacity of ").concat(this.engines, "cc"));
    };
    return Car;
}());
var newCar = new Car('Lamborghini', 2, true, 'ZedBlack', 'Petrol', 6498);
newCar.make();
// Arithmetic operation on two numbers
// addition
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 15);
console.log('Sum of the two numbers is: ' + sum);
// Subtraction
function subtractNumbers(a, b) {
    return a - b;
}
var Difference = subtractNumbers(10, 15);
console.log('Difference of the two numbers is: ' + Difference);
// Multiplication
function multiplyNumbers(a, b) {
    return a * b;
}
var sum = multiplyNumbers(10, 15);
console.log('Multiplication of the two numbers is: ' + sum);
// Divison
function divideNumbers(a, b) {
    return a / b;
}
var sum = divideNumbers(10, 15);
console.log('Division of the two numbers is: ' + sum);
// Type Annotations in TypeScript
var age = 32; // number variable
var tName = "John"; // string variable
var isUpdated = true; // Boolean variable
function display(id, tName) {
    console.log("My name is ".concat(tName, ". My Age is ").concat(id));
}
display(32, "John");
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
// letDeclaration();
var numb1 = 1;
function varDeclaration() {
    var num2 = 2;
    var num3;
    if (num2 > numb1) {
        num3 = 3;
        num3++;
    }
    while (numb1 < num2) {
        var num4 = 4;
        numb1++;
    }
    console.log(numb1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}
varDeclaration();
