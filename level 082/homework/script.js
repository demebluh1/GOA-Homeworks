let fruits = ["ვაშლი", "ბანანი", "მსხალი"];
fruits.push("ატამი");

console.log(fruits);


let numbers = [10, 20, 30, 40];
let removedNumber = numbers.pop();

console.log(removedNumber);
console.log(numbers);


let words = ["მე", "ვსწავლობ", "JavaScript", "GOA", "აკადემიაში"];
let result = words.join("-");

console.log(result);


let list = [1, 2, 3, 4, 5, 6];
let newList = list.slice(2, 5);

console.log(newList);


let cities = ["თბილისი", "ბათუმი", "ქუთაისი", "რუსთავი"];
let firstCity = cities.shift();

console.log(firstCity);
console.log(cities);


let nums = [5, 10, 15];
nums.unshift(1);

console.log(nums);
console.log(nums.length);


let animals = ["ლომი", "ვეფხვი", "სპილო"];
let birds = ["არწივი", "მტრედი", "ბეღურა"];

let allAnimals = animals.concat(birds);

console.log(allAnimals);


let array = [10, 20, 30, 40, 50, 60, 70];
let removedItems = array.splice(3, 2);

console.log(removedItems);
console.log(array);