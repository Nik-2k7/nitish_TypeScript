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
