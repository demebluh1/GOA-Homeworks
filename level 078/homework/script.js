// 1) if else

let number = Number(prompt("შეიყვანეთ რიცხვი"));

if (number > 50) {
    console.log("big");
} else if (number > 25) {
    console.log("medium");
} else {
    console.log("small");
}


// 1) ternary operator

let number2 = Number(prompt("შეიყვანეთ რიცხვი"));

console.log(number2 > 50 ? "big" : number2 > 25 ? "medium" : "small");


// 1) switch case

let number3 = Number(prompt("შეიყვანეთ რიცხვი"));

switch (true) {
    case number3 > 50:
        console.log("big");
        break;
    case number3 > 25:
        console.log("medium");
        break;
    default:
        console.log("small");
}


// 2)


// if else ამოწმებს პირობებს თანმიმდევრობით და ასრულებს შესაბამის კოდს.

// ternary operator არის if else-ის მოკლე ჩანაწერი და გამოიყენება მარტივი პირობებისთვის.

// switch case ამოწმებს ერთ მნიშვნელობას სხვადასხვა შემთხვევებთან და ასრულებს შესაბამის კოდს.


// 3)

let hasTicket = true;
let isVip = false;

if (hasTicket || isVip) {
    console.log("შესვლა ნებადართულია");
} else {
    console.log("შესვლა აკრძალულია");
}


// 4)

let isLoggedIn = true;

console.log(isLoggedIn ? "Welcome Back!" : "Please Log In");


// 5)

let role = "admin";

switch (role) {
    case "admin":
        console.log("თქვენ გაქვთ სრული წვდომა სისტემაზე");
        break;

    case "moderator":
        console.log("თქვენ შეგიძლიათ კონტენტის მართვა");
        break;

    case "student":
        console.log("თქვენ შეგიძლიათ მხოლოდ ინფორმაციის წაკითხვა");
        break;

    default:
        console.log("უცნობი სტატუსი");
}