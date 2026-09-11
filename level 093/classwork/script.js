const Flower = (flower_name, flower_color, flower_quantity) => {
    return {
        flower_name,
        flower_color,
        flower_quantity,

        all_info() {
            console.log(`Name: ${flower_name}, Color: ${flower_color}, Quantity: ${flower_quantity}`)
        }
    }
}

let flower = Flower ("Rose", "Red", 10 )

flower.all_info()

// N2
let date = new Date()

let month = date.getMonth() + 1
let day = date.getDate()
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()

console.log(`${month}/${day}/${year} | ${hour}:${minute}`)