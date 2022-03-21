//Загальний вигляд коду
//if (condition is true) {
    // code is executed
//} else {
    // code is executed
//}

const age = 18;

if (age >= 18) {
    console.log("Nick is an adult.");
} else {
    console.log("Nick is a child.");
}

//Загальний вигляд
//if (condition 1 is true) {
    // code is executed
//} else if (condition 2 is true) {
    // code is executed
//} else {
    // code is executed
//}

const age = 18;

if (age < 18) {
    console.log("Alice is under 18 years old.");
} else if (age >= 18 && age <= 21) {
    console.log("Alice is between the ages of 18 and 21.");
} else {
    console.log("Alice is over 21 years old.");
}

const pet = "dog";

if (pet === "lizard") {
    console.log("I own a lizard");
} else if (pet === "dog") {
    console.log("I own a dog");
} else if (pet === "cat") {
    console.log("I own a cat");
} else if (pet === "snake") {
    console.log("I own a snake");
} else if (pet === "parrot") {
    console.log("I own a parrot");
} else {
    console.log("I don't own a pet");
}


const pet = "dog";

switch (pet) {
    case "lizard":
        console.log("I own a lizard");
        break;
    case "dog":
        console.log("I own a dog");
        break;
    case "cat":
        console.log("I own a cat");
        break;
    case "snake":
        console.log("I own a snake");
        break;
    case "parrot":
        console.log("I own a parrot");
        break;
    default:
        console.log("I don't own a pet");
        break;
}


const age = 17;
const ownsCar = true;

if (age >= 16 && ownsCar) {
    console.log("Jerry is old enough to drive and has his own car.");
} else {
    console.log("Jerry does not drive.");
}

const boyfriendIsPaying = true;
const isSale = false;

if (boyfriendIsPaying || isSale) {
    console.log("Jesse will go shopping.");
} else {
    console.log("Jesse will not go shopping.");
}

const boyfriendIsPaying = true;
const isSale = false;

if (!boyfriendIsPaying || isSale) {
    console.log("Jesse will go shopping.");
} else {
    console.log("Jesse will not go shopping.");
}


condition ? if condition is true : if condition is false

const age = 32;
const citizen = age >= 18 ? "Can vote" : "Cannot vote";
console.log(citizen);

const age = 32;
let citizen;

if (age >= 18) {
    citizen = "Can vote";
} else {
    citizen = "Cannot vote";
}

console.log(citizen);


let somVar = "string";
somVar = 5;
somVar = {id:5, name:"Some name"}


let somVar:Station = {id:}
