//Interface
// interface Animal {
//   name: string;
//   runningSpeed: number;
//   eat(food: string): string;
// }
// interface Bird {
//   name: string;
//   flyingSpeed: number;
// }
// interface Creature extends Animal, Bird {}
// const tiger: Creature = {
//   name: "Tiger",
//   runningSpeed: 300,
//   flyingSpeed: 10,
// };
//interface vs type difference
// class Tiger implements Animal {
//   constructor(public name: string, public runningSpeed: number) {}
//   eat(food: string) {
//     return "Eating food";
//   }
// }

///TypeGuards
type Bird = {
  name: string;
  flyingSpeed: number;
};
type Animal = {
  name: string;
  runningSpeed: number;
};
type Creature = Animal | Bird;
function log(creature:Creature){ //typeGuard
    // if ("runningSpeed" in creature) { // TypeGuards
    //     console.log(creature.runningSpeed);
    // }
}
// const sparrow:Creature={
//     name:'Sparrow'
// }
//Abstract method return something benefit base class child ko define krna hoga
//interface parent ho ya child jo rule banaegi woh khud p 
//implement horha hota h

//Abstract vs interface

//================================= Type Casting
const input = document.getElementById("input")! as HTMLInputElement;
const input1=<HTMLInputElement>document.getElementById("input1")
//================================== Generic
// const promiseFunc = new Promise:()
