// N1
function greet(name = "stranger") {
    console.log(`Hello, ${name}!`);
}

greet("Demetre");
greet();

// N2
function double(num) {
    return num * num;
}

console.log(double(5));

// N3
function checkOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkOdd(8));
console.log(checkOdd(7));

// N4
function BMI(height, weight) {
    return weight / (height * height);
}

console.log(BMI(1.73, 70));