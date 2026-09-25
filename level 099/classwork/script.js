// N1
let width = 50
let height = 50

let box = document.getElementById("box")
let plus = document.getElementById("plus")

plus.addEventListener("click", function() {
    width = width + 10;
    height = height + 10;
    box.style.width = width + "px"
    box.style.height = height + "px"
})

// N2
let colorBox = document.getElementById("colorBox")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
red.addEventListener("click", function() {
    colorBox.style.backgroundColor = "red"
});

yellow.addEventListener("click", function() {
    colorBox.style.backgroundColor = "yellow"
})

green.addEventListener("click", function() {
    colorBox.style.backgroundColor = "green"
})
