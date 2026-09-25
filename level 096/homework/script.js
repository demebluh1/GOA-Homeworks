let list = document.getElementById("list")

let item1 = document.createElement("li")
item1.textContent = "Item 1"

let item2 = document.createElement("li")
item2.textContent = "Item 2"

let item3 = document.createElement("li")
item3.textContent = "Item 3"

list.appendChild(item1)
list.appendChild(item2)
list.appendChild(item3)

let box = document.getElementById("box")

let p = box.querySelector("p")

p.textContent = "New Updated Text"