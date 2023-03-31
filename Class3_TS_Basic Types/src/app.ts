// function getTuple(){
//   return ["Bob", 24];
// }
// var [a, b] = getTuple();
// a === "bob" , b === 24 are both true
// ==================
// function getTuple(){
//   return ["Bob", 24];
// }
// var [a, b] = getTuple();
// a === "bob" , b === 24 are both true

// Tuples are a sort of list but with a limited set of items.
// In JavaScript, tuples are created using arrays.
//In Flow you can create tuples using the [type, type, type] syntax.
//When you are getting a value from a tuple at a specific index, it will return the type at that index.
//===================================================================================================
// What is a tuple in TypeScript?
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

//let myTuple:[ string, number ] = [ "hello", 20 ];
// let yourTuple: readonly [number, number];
// yourTuple = [12, 44];

//Tuples
// let gender: [string, string] = ["Male", "Female"];
// gender.push("assd");

// let admin: [number, string] = [1, "Admin"];
// let error: [number, string] = [404, "Not Found"]; //fixed length not new value

// Class OOPS
//single entity
class Student {
  private skills: string[] = [];
  // name: string;
  // rollNo: number;
  constructor(public n: string, public readonly r: number) {
    // this.name = n;
    // this.rollNo = r;
  }
  addSkill(skill: string) {
    this.skills.push(skill);
  }
}
const student1 = new Student("Komal", 1212);
const student2 = new Student("Momal", 1245);

student1.addSkill("js");
//student1.skills.push("Java");
// student1.skills.length = 0;
console.log(student1);
console.log(student2);
console.log(student1.r)
