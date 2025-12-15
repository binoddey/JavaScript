// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a. 
companies.shift();
console.log(companies);

//b. 
companies.splice(1, 1, "Ola");
console.log(companies);

//c.
companies.push("Amazon");
console.log(companies);
