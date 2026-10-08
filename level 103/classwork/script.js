let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let repeatPassword = document.getElementById("repeatPassword").value
    let phone = document.getElementById("phone").value

    if (username.length <= 7) {
        alert("Username must be more than 7 characters")
    } else if (!email.includes("@")) {
        alert("Email must contain @")
    } else if (password.length < 8) {
        alert("Password must have at least 8 characters")
    } else if (password[0] !== password[0].toUpperCase()) {
        alert("Password must start with a capital letter")
    } else if (password !== repeatPassword) {
        alert("Passwords do not match")
    } else if (phone === "") {
        alert("Phone cannot be empty")
    } else {
        alert("Everything is correct!")
    }
});