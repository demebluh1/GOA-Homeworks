// 2) this keyword
// this არის keyword, რომელიც მიუთითებს იმ ობიექტზე,
// რომლის კონტექსტშიც ამჟამად ვასრულებთ მეთოდს.
// მისი გამოყენებით შეგვიძლია ობიექტის კუთვნილებებსა და მეთოდებზე წვდომა.
// მაგალითად: this.name

// 3) Getters და Setters
// Getter არის სპეციალური მეთოდი, რომლის საშუალებითაც
// შეგვიძლია ობიექტის კუთვნილების მნიშვნელობის მიღება.
// Setter გამოიყენება კუთვნილების მნიშვნელობის შესაცვლელად.
// ისინი გამოიყენება მონაცემებზე კონტროლირებული წვდომისთვის.

// 4) Private მეთოდები
// Private მეთოდი არის მეთოდი, რომლის გამოყენებაც
// შესაძლებელია მხოლოდ თავად კლასის შიგნით.
// JavaScript-ში private მეთოდი აღინიშნება # სიმბოლოთი.
// მას ვიყენებთ შიდა ლოგიკის დასამალად და პირდაპირი წვდომის შესაზღუდად.


// 5) Person ობიექტი

const person = {
    name: "Demetre",
    age: 14,

    // Getter name-ისთვის
    get getName() {
        return this.name
    },

    get getAge() {
        return this.age
    },

    set setAge(value) {
        this.age = value
    },

    printInfo: function() {
        console.log("Name:", this.getName)
        console.log("Age:", this.getAge)
    },

    // ასაკის შეცვლა
    setAgeMethod: function(value) {
        this.setAge = value
    }
}


person.printInfo();

person.setAgeMethod(15);

person.printInfo();