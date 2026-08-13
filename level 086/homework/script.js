// 2
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// 3
const names = ["John", "Sarah", "Mike"];

names.forEach(function (name) {
  console.log(`Hello, ${name}`);
});

// 4
const nums = [10, 20, 30, 40];

let sum = 0;

nums.forEach(function (number) {
  sum += number;
});

console.log("Sum:", sum);

// 5
const words = ["javascript", "is", "awesome"];

words.forEach(function (word) {
  console.log(word, "-", word.length);
});

// 6
const students = ["John", "Sarah", "Mike"];

students.forEach(function (student, index) {
  console.log(`${index} - ${student}`);
});

// 7
const numbers2 = [1, 2, 3, 4, 5];

const doubled = numbers2.map(function (number) {
  return number * 2;
});

console.log(doubled);

// 8
const celsius = [0, 20, 30, 40];

const fahrenheit = celsius.map(function (temp) {
  return temp * 9 / 5 + 32;
});

console.log(fahrenheit);

// 9
const names2 = ["John", "Sarah", "Mike"];

const upperNames = names2.map(function (name) {
  return name.toUpperCase();
});

console.log(upperNames);

// 10
const numbers3 = [1, 2, 3, 4, 5];

const result = numbers3.map(function (number) {
  return `Number: ${number}`;
});

console.log(result);