// 1. 
let person = {
    name: "Demetre",
    age: 14,
    height: 170
};

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.height);

// 1.2)
person.age = 14;

console.log(person);

delete person.height;

console.log(person);


const user = {};

user.fullname = "Demetre Gelashvili";
user.password = "12345678";

user["favorite color"] = "Red";

user.printInfo = function() {
    console.log(
        `Fullname: ${this.fullname}, Password: ${this.password}, Favorite Color: ${this["favorite color"]}`
    );
};

user.printInfo();