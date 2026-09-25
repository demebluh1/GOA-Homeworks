// 1)

console.log("Demetre");
console.log("JavaScript");

console.log(15);
console.log(3.14);

console.log(true);
console.log(false);

console.log(undefined);
let x;
console.log(x);

console.log(null);
console.log(null);

console.log(12345678901234567890n);
console.log(999999999999999999n);

console.log(Symbol("id"));
console.log(Symbol("user"));


// 2)

console.log(5 + 3);
console.log(10 + 15);
console.log(100 + 200);

console.log(10 - 4);
console.log(50 - 20);
console.log(30 - 5);

console.log(20 / 2);
console.log(15 / 3);
console.log(100 / 4);

console.log(4 * 5);
console.log(7 * 8);
console.log(12 * 3);

console.log(10 % 3);
console.log(20 % 6);
console.log(15 % 4);


// 3)

console.log(5 < 10);
console.log(3 < 8);
console.log(20 < 15);

console.log(10 > 5);
console.log(15 > 2);
console.log(4 > 9);

console.log(5 <= 5);
console.log(4 <= 8);
console.log(10 <= 7);

console.log(7 >= 7);
console.log(12 >= 5);
console.log(2 >= 9);

console.log(5 == "5");
console.log(10 == 10);
console.log(true == 1);

console.log(5 !== "5");
console.log(10 !== 5);
console.log(false !== true);


// 4)

// == ადარებს მხოლოდ მნიშვნელობას.
// === ადარებს მნიშვნელობას და მონაცემთა ტიპსაც.


// 5)

// let-ის მნიშვნელობის შეცვლა შეიძლება.
// const-ის მნიშვნელობის შეცვლა არ შეიძლება.


// 6)

// Increment (++) ზრდის მნიშვნელობას 1-ით.
// Decrement (--) ამცირებს მნიშვნელობას 1-ით.

let num = 5;
num++;
console.log(num);

num--;
console.log(num);


// 7)

// Truthy მნიშვნელობები: true, 1, "Hello", [], {}
// Falsy მნიშვნელობები: false, 0, "", null, undefined, NaN


// 8)

const weekDay = "Sunday";
console.log(weekDay);


// 9)

console.log(Math.PI);


// 10)

let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 30) + 1;

console.log(random1 / random2);


// 11)

let age = 20;

console.log(age >= 18 ? "Adult" : "Minor");


// 12)

let name = "Demetre";

switch (name) {
  case "davit":
    console.log("გამარჯობა დავით!");
    break;

  case "nikolozi":
    console.log("გამარჯობა ნიკოლოზ!");
    break;

  case "vazha":
    console.log("გამარჯობა ვაჟა!");
    break;

  default:
    console.log("გამარჯობა მომხმარებელო!");
}