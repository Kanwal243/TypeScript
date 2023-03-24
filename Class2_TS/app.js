var person = {
    // object rakhna tha
    names: "KANWAL",
    age: 25,
    hobbies: ["sports"],
};
person.email = "kanwal@gmail.com";
var persons = []; // empty array bane push krna h
persons.push({
    names: "YOUSUF",
    age: 45,
    hobbies: ["plays"],
    email: "kanwal@gmail.com",
});
var add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};
console.log(10, 5, "subtract");
