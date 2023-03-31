// Intersection Types
// type Creature = Animal & Bird; // Intersection Types

// const cockroach: Creature = {
//     name: "Cockroach",
//     runningSpeed: 100,
//     flyingSpeed: 300
// }

// Interfaces

// interface Animal {
//     name: string;
//     runningSpeed: number;
// }

// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }

// interface Creature extends Animal, Bird {}

// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300,
//     flyingSpeed: 10
// }

// interface Animal {
//     name: string;
//     runningSpeed: number;
//     eat(food: string): string;
// }

// class Tiger implements Animal {
//     constructor(public name: string, public runningSpeed: number) {}

//     eat (food: string) {
//         return "Eating food";
//     }
// }

// Type Guards

// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }

// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// type Creature = Animal | Bird;

// function log(creature: Creature) {
//     if ("runningSpeed" in creature) { // Type Guards
//         console.log(creature.runningSpeed);
//     }

//     // console.log(creature.runningSpeed);
// }
// const sparrow: Creature = {
//     name: "Sparrow",
//     flyingSpeed: 150
// }
// log(sparrow);

// Type Casting
// const input = document.getElementById("input1")! as HTMLInputElement;
// const input1 = <HTMLInputElement>document.getElementById("input1")!;