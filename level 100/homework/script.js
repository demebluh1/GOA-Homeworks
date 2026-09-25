// 2) Image Slider

let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let currentImage = 0;

let slider = document.getElementById("slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", function() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    slider.src = images[currentImage];
});

prev.addEventListener("click", function() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    slider.src = images[currentImage];
});


// 5) Form

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
});