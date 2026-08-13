// N1
const fruits = ["ვაშლი", "ბანანი", "ატამი"]
fruits.push("ფორთოხალი")
console.log(fruits)

// N2
const cars = ["BMW", "Mercedes", "Audi", "Tesla"] 
cars.pop()
console.log(cars)

// N3
let cities = ["თბილისი", "ქუთაისი", "ბათუმი", "რუსთავი"];
let result = cities.join(" / ")
console.log(result)

// N4
let colors = ["წითელი", "მწვანე", "ლურჯი", "ვარდისფერი", "სტაფილოსფერი", "ყვითელი"];
let result1 = colors.slice(0, 3);
console.log(result1);

// N5
let inventory = ["laptop", "mouse", "keyboard", "mouse"];
let languages = ["Python", "JS", "C++", "Java"];
let result2 = inventory.concat(languages);
console.log(result2);