// 2) addEventListener გამოიყენება იმისთვის,
// რომ ელემენტზე კონკრეტული მოქმედების დროს კოდი შესრულდეს.
// მაგალითად: click, mouseover, keydown და ა.შ.

// 3) Yes / No Switch

let switchText = document.getElementById("switchText");
let switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", function() {
    if (switchText.textContent === "No") {
        switchText.textContent = "Yes";
    } else {
        switchText.textContent = "No";
    }
});


// 4) Random Number

let randomNumber = document.getElementById("randomNumber");
let randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", function() {
    randomNumber.textContent = Math.floor(Math.random() * 100) + 1;
});


// 5) Add Name

let nameText = document.getElementById("nameText");
let nameButton = document.getElementById("nameButton");

nameButton.addEventListener("click", function() {
    nameText.textContent += "Demetre ";
});