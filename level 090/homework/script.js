// 11.

const rectangle = {
    name: "Rectangle",
    color: "Blue",
    unit: "cm",

    area(width, height) {
        return width * height
    },

    perimeter(width, height) {
        return 2 * (width + height)
    }
}

console.log("11. Area:", rectangle.area(10, 5))
console.log("11. Perimeter:", rectangle.perimeter(10, 5))


// 12.

const movie = {
    title: "Interstellar",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    year: 2014,

    checkAge(age) {
        if (age >= 18) {
            return "Allowed"
        } else {
            return "Not allowed"
        }
    },

    isNew(currentYear) {
        return currentYear - this.year <= 5
    }
}

console.log("12. Age:", movie.checkAge(18))
console.log("12. Is new:", movie.isNew(2026))


// 13.

const passwordChecker = {
    name: "Password Checker",
    version: "1.0",

    checkLength(password) {
        return password.length >= 8
    },

    hasNumber(password) {
        for (let char of password) {
            if (char >= "0" && char <= "9") {
                return true
            }
        }

        return false
    },

    isStrong(password) {
        if (this.checkLength(password) && this.hasNumber(password)) {
            return "Strong"
        } else {
            return "Weak"
        }
    }
}

console.log("13. Length:", passwordChecker.checkLength("hello123"))
console.log("13. Has number:", passwordChecker.hasNumber("hello123"))
console.log("13. Strength:", passwordChecker.isStrong("hello123"))


// 14.

const circle = {
    name: "Circle",
    unit: "cm",

    area(radius) {
        return Math.PI * radius * radius
    },

    circumference(radius) {
        return 2 * Math.PI * radius
    },

    diameter(radius) {
        return 2 * radius
    }
}

console.log("14. Area:", circle.area(5))
console.log("14. Circumference:", circle.circumference(5))
console.log("14. Diameter:", circle.diameter(5))


// 15.

const gradeCalculator = {
    name: "Grade Calculator",
    subject: "Math",

    average(a, b, c) {
        return (a + b + c) / 3
    },

    getGrade(score) {
        if (score >= 90) {
            return "A"
        } else if (score >= 80) {
            return "B"
        } else if (score >= 70) {
            return "C"
        } else if (score >= 60) {
            return "D"
        } else {
            return "F"
        }
    },

    isPassed(score) {
        return score >= 60
    }
}

console.log("15. Average:", gradeCalculator.average(90, 85, 95))
console.log("15. Grade:", gradeCalculator.getGrade(87))
console.log("15. Passed:", gradeCalculator.isPassed(87))