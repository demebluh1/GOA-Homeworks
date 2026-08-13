// 2. ობიექტი არის მონაცემთა სტრუქტურა,
// რომელიც აერთიანებს სხვადასხვა კუთვნილებას (property) და მეთოდებს.
// კუთვნილებას აქვს სახელი (key) და მნიშვნელობა (value).

// 3. 
let myself = {
    name: "გიორგი",
    surname: "გიორგაძე",
    age: 18,
    group: "Group 20"
};

console.log(myself.name);
console.log(myself.surname);
console.log(myself.age);
console.log(myself.group);


// 4. 
let user = {
    name: "გიორგი",
    age: 18,
    city: "თბილისი"
};

user.email = "giorgi@gmail.com";

user["country"] = "Georgia";

delete user.age;

console.log(user);


// 5.
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 10));


// 6.
let person = {
    name: "გიორგი",
    age: 18,
    city: "თბილისი"
};

console.log(`My name is ${person.name} and I live in ${person.city}`);