// CHeck if a number num1 is greater than another number num2, and print the result.

let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} 
else {
    console.log(`${num2} is greater than ${num1}`);
}


// ==========================================

// EXAMPLE: Weather Suggestion

let temperature = 32;

if (temperature > 40) {
    console.log("Extreme heat. Stay indoors.");
} else if (temperature > 30) {
    console.log("It is hot outside.");
} else if (temperature > 20) {
    console.log("Weather is pleasant.");
} else if (temperature > 10) {
    console.log("It is a bit cold.");
} else {
    console.log("Very cold weather.");
}