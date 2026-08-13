// N1

const list1 = [10, "Hello", true, 25, "JavaScript", false];

list1.forEach((item) => {
    console.log(item);
});


// N2

const list2 = [5, "Apple", 15, false, "Cat"];

list2.map((item, index) => {
    console.log(`ინდექსი: ${index}, მნიშვნელობა: ${item}`);
});


// N3

const names = ["Giorgi", "Ana", "Nika", "Alexander", "Mariam", "Luka"];

const longNames = names.filter(name => name.length > 6);

console.log(longNames);


// N4

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);


// N5

const fruits = ["Banana", "Apple", "Kiwi", "Orange", "Mango"];

const index = fruits.findIndex(fruit => fruit.length <= 5);

console.log(index);