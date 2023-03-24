const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

const button = document.querySelector("button")!;

function add(num1: number, num2: number) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// Number: number 5, 5.5 , -7
// String: string "Apple"
// Boolean: boolean true,false

const personname = "Kanwal";
let fullname: string = "Kanwal Yousuf";

// let person: string;
// person = "Kanwal";

let age: number;
age = 25;

let gender: boolean;
gender = true;

// const names = ["Ali", "Sara", "Badar"];
let names: string[] = [];
names.push("k");

let arr: string[];
arr = ["Apple", "Green"];
arr.push("Pineapple");
arr.push();

const arr2: number[] = [1, 2, 3];
arr2.push();

//Object

const persondata = {
  names: "Kanwal",
  age: 25,
  rollNo: 232,
  hobbies: ["sports"],
};

//===========================================

// const persondata: {
//   names: string;
//   age: number;
//   hobbies: string[];
//   // email?: string;
//   email: string;
// } = {
//   names: "Kanwal Yousuf",
//   age: 25,
//   hobbies: ["sports"],
//   email: "",
// };
// persondata.email = "kanwal@gmail.com";

