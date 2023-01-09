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
