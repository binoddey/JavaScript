//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

let i = 0;
let finalPrice = [];
for (let val of items) {
    val *= 0.9;
    console.log(`value of item ${i + 1} before offer: ${items[i].toFixed(2)}`);
    console.log(`value of item ${i + 1} after offer: ${val.toFixed(2)}`);
    i++;
    finalPrice.push(val);
}
console.log(finalPrice);
let sum = 0;
for (let i = 0; i < finalPrice.length; i++) {
    sum += finalPrice[i];
}
console.log(`Final price after discount: ${sum.toFixed(2)}`);
