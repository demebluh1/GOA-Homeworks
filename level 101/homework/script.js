// 2. Username

document.getElementById("usernameForm").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value;

    if (username === "") {
        event.preventDefault();
        alert("Username cannot be empty!");
    }
    else if (username.length < 5 || username.length > 15) {
        event.preventDefault();
        alert("Username must be between 5 and 15 characters!");
    }
});


// 3. Password

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match!");
    }
});


// 4. Email, Age, Phone

document.getElementById("infoForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    if (!email.includes("@") || !email.includes(".")) {
        event.preventDefault();
        alert("Email must contain @ and .");
    }
    else if (age <= 18) {
        event.preventDefault();
        alert("Age must be greater than 18!");
    }
    else if (!phone.startsWith("5")) {
        event.preventDefault();
        alert("Phone number must start with 5!");
    }
});


// 5. First Name and Last Name

document.getElementById("nameForm").addEventListener("submit", function(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (firstName[0] !== firstName[0].toUpperCase()) {
        event.preventDefault();
        alert("First Name must start with a capital letter!");
    }
    else if (lastName[0] !== lastName[0].toUpperCase()) {
        event.preventDefault();
        alert("Last Name must start with a capital letter!");
    }
});