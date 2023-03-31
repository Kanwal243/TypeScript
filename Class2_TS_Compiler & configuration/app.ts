//Custom type objects
type Persondata = {
  // object assign value type look like object in key value using semi coma
  names: string;
  age: number;
  hobbies: string[];
  email?: string;
};
let person: Persondata = {
  // object rakhna tha
  names: "KANWAL",
  age: 25,
  hobbies: ["sports"],
};
person.email = "kanwal@gmail.com";

const persons: Persondata[] = []; // empty array bane push krna h
persons.push({
  names: "YOUSUF",
  age: 45,
  hobbies: ["plays"],
  email: "kanwal@gmail.com",
});
//primitive value like string

// let func:Function;

//   const add = function (
//     val1: number,
//     val2: number,
//     cb: (x: string) => void
//   ): number {
//     cb("hello");
//     return val1 + val2;
//   };
//   let func: (x: number, y: number, z: (x: string) => void) => number;

//setInterval(function(){
//   console.log("Hello")
// },1000); //FUNCTION KO AS A PARAMETER CALLED CALL BACK

//==========  typeliteral
type Calc = "add" | "subtract" | "+" | "-";
const add = function (val1: number, val2: number, calc: Calc) {
  if (calc === "add" || calc === "+") {
    return val1 + val2;
  } else if (calc === "subtract" || calc === "-") {
    return val1 - val2;
  }
};
console.log(10, 5, "subtract");
