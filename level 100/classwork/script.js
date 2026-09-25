// N1
let form = document.getElementById("myForm")
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstname").value
    let lastName = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
})