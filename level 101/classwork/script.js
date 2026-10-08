let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let age = document.getElementById("age").value
    let phone = document.getElementById("phone").value

    if (username.length < 3) {
        alert("Name must contain atleast 3 letters")
        return;
    }

    if (!email.includes("@")) {
        alert("Email must contain @")
        return;
    }

    if (password.length < 8) {
        alert("Password must have atleast 8 characters")
        return;
    }

    if (age === "") {
        alert("Age field cannot be empty")
        return;
    }

    if (phone === "") {
        alert("Phone number cannot be empty")
        return;
    }

    console.log("Form Submitted Succesfully!")
});