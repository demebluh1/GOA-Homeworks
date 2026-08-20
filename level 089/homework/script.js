// 5.

const user5 = {
    name: "Demetre",
    age: 17,
    city: "Tbilisi"
}

let count5 = 0

for (let key in user5) {
    count5++
}

console.log("5:", count5)


// 6.

const products = {
    apple: 2,
    banana: 3,
    orange: 4,
    watermelon: 10
}

for (let product in products) {
    products[product] = products[product] * 1.2
}

console.log("6:", products)


// 7.

const user7 = {
    username: "admin",
    email: "admin@gmail.com",
    age: 20,
    country: "Georgia"
}

let emailExists = false

for (let key in user7) {
    if (key === "email") {
        emailExists = true
    }
}

if (emailExists) {
    console.log("7: Email exists")
} else {
    console.log("7: Email doesn't exist")
}


// 8.

const scores8 = {
    Nika: 85,
    Giorgi: 92,
    Ana: 97,
    Luka: 88
}

let highestScore = 0
let student = ""

for (let name in scores8) {
    if (scores8[name] > highestScore) {
        highestScore = scores8[name]
        student = name
    }
}

console.log("8:", student + " has the highest score: " + highestScore)


// 9. 

const scores9 = {
    math: 90,
    english: 80,
    physics: 70,
    biology: 100
}

let sum = 0
let count9 = 0

for (let subject in scores9) {
    sum += scores9[subject]
    count9++
}

let average = sum / count9

console.log("9:", average)


// 10. 

const user10 = {
    name: "Demetre",
    age: 17,
    isStudent: true,
    city: "Tbilisi",
    balance: 150
}

let stringCount = 0
let numberCount = 0
let booleanCount = 0

for (let key in user10) {
    if (typeof user10[key] === "string") {
        stringCount++
    } else if (typeof user10[key] === "number") {
        numberCount++
    } else if (typeof user10[key] === "boolean") {
        booleanCount++
    }
}

console.log("10:")
console.log("String:", stringCount)
console.log("Number:", numberCount)
console.log("Boolean:", booleanCount)