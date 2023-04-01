"use strict";
// --------------------------- 1.  Vehicle Class---------------------------------------------
//     abstract keyword make class abstract
class Vehicle {
    // 3.   Constructor in the Vehicle class that takes in these properties as parameters and initializes them
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    // 4.   Accessor methods (getters) for the make, model, year, and rented instance variables in the Vehicle class
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    // 5.   A mutator method (setter) for the rented instance variable in the Vehicle class.
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log("This vehicle is already rented");
        }
        else {
            console.log("You have rented this vehicle");
            this.rented = true;
        }
    }
    // 7.   Two methods in the Vehicle class: rent() and return()
    //      The rent() method should check if the vehicle is already rented and provide a message to the user accordingly.
    //      If the vehicle is available, it should set the rented instance variable to true. The return() method should check
    //      if the vehicle has been rented and provide a message to the user accordingly. If the vehicle has been rented, it
    //      should set the rented instance variable to false.
    return() {
        if (this.rented) {
            console.log("You have returned this vehicle");
            this.rented = false;
        }
        else {
            console.log("This vehicle has not been rented");
        }
    }
}
// 8.   subclasses of Vehicle for each type of vehicle in the rental system (e.g. Car, Truck, Motorcycle). Each subclass should
//      implement the rentalRate method to provide the rental rate for that type of vehicle.
class Car extends Vehicle {
    // 9.   additional instance variable 'passengers' and methods in the subclasses as needed to model the specific characteristics of each type of vehicle
    constructor(make, model, year, rented, passengers) {
        super(make, model, year, rented);
        this.passengers = passengers;
    }
    rentalRate() {
        return 50;
    }
    getPassengers() {
        return this.passengers;
    }
    setPassengers(passengers) {
        this.passengers = passengers;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, capacity) {
        super(make, model, year, rented);
        this.capacity = capacity;
    }
    rentalRate() {
        return 100;
    }
    getCapacity() {
        return this.capacity;
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 30;
    }
    getEngineSize() {
        return this.engineSize;
    }
    setEngineSize(engineSize) {
        this.engineSize = engineSize;
    }
}
// 10.  create instances of each type of vehicle and test the rent() and return() methods to make sure they work as expected
// Car Class Testing
console.log("Car Class Testing");
const car = new Car("Toyota", "Camry", 2020, false, 4);
car.rent();
console.log(car.rentalRate()); // 50
console.log(car.isRented()); // true
car.return();
console.log(car.isRented()); // false
// Truck Class Testing
console.log("Truck Class Testing");
const truck = new Truck("Ford", "F-150", 2018, false, 1500);
truck.rent();
console.log(truck.rentalRate()); // 1500
console.log(truck.isRented()); // true
truck.return();
console.log(truck.isRented()); // false
// Motorcyle Class Testing
console.log("motorcycle Class Testing");
const motorcycle = new Motorcycle("Honda", "CBR", 2019, false, 600);
motorcycle.rent();
console.log(motorcycle.rentalRate()); // 30
console.log(motorcycle.isRented()); // true
motorcycle.return();
console.log(motorcycle.isRented()); // false
//# sourceMappingURL=index.js.map