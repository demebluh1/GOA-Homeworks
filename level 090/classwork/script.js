// // N1
// const person = {
//     name: "Demetre",
//     surname: "Gelashvili",
//     age: "14",
//     hobby: "Programming"
// }

// person.eyeColor = "Brown"
// delete person.hobby

// console.log(person)

// N2
let animal = {
  name: "Lion",
  age: 5,
  color: "yellow"
}

delete animal.age

console.log(animal)

animal.age = 5

console.log(animal)

// N3
let motorcycle = {
  brand: "Yamaha",
  model: "MT-07",
  year: 2022,
  color: "Black"
}

motorcycle.color = "Red"

delete motorcycle.year

motorcycle.engine = "689cc"

console.log(motorcycle)

// N4
const calculator = {
  name: "Calculator",
  type: "Basic",

  add(a, b) {
    return a + b
  },

  subtract(a, b) {
    return a - b
  },

  multiply(a, b) {
    return a * b
  },

  divide(a, b) {
    return a / b
  }
};


// N5
const person = {
  name: "Deme",
  surname: "Gelashvili",
  age: 20,
  height: 180,
  weight: 75,

  greet(name) {
    return `Hello, ${name}!`
  }
};


// N6
const math = {
  name: "Math",
  version: "1.0",

  square(number) {
    return number ** 2
  },

  cube(number) {
    return number ** 3
  },

  isEven(number) {
    return number % 2 === 0
  }
};


// N7
const stringHelper = {
  name: "String Helper",
  language: "English",

  upper(text) {
    return text.toUpperCase()
  },

  lower(text) {
    return text.toLowerCase()
  },

  length(text) {
    return text.length
  }
}


// N8
const temperature = {
  name: "Temperature",
  unit: "Celsius",

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  },

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  }
};


// N9
const student = {
  name: "Demetre",
  surname: "Gelashvili",
  school: "School #1",
  grade: 9,

  checkGrade(score) {
    if (score >= 90) {
      return "Excellent";
    } else {
      return "Good";
    }
  },

  isPassed(score) {
    if (score >= 51) {
      return true;
    } else {
      return false;
    }
  }
};



console.log(calculator.add(10, 5));          // 15
console.log(calculator.subtract(10, 5));     // 5
console.log(calculator.multiply(10, 5));      // 50
console.log(calculator.divide(10, 5));        // 2

console.log(person.greet("Demetre"));            // Hello, Demetre!

console.log(math.square(5));                  // 25
console.log(math.cube(3));                    // 27
console.log(math.isEven(10));                 // true

console.log(stringHelper.upper("hello"));     // HELLO
console.log(stringHelper.lower("HELLO"));     // hello
console.log(stringHelper.length("Hello"));    // 5

console.log(temperature.toCelsius(100));      // 37.777...
console.log(temperature.toFahrenheit(0));     // 32

console.log(student.checkGrade(95));          // Excellent
console.log(student.checkGrade(70));          // Good
console.log(student.isPassed(60));            // true
console.log(student.isPassed(40));            // false