let name = "Binod";
console.log(name);

//template literals
let specialStr = 'This is a special string';
console.log(specialStr);


let obj = {
    name: "Binod Dey",
    age: 19
};
let output = `My name is ${obj.name}. I am ${obj.age} years old.`;
console.log(output);

console.log(`My name is ${obj.name}. I am ${obj.age} years old.`); //template literals
console.log("My name is ${obj.name}. I am ${obj.age} years old."); //normal string
console.log(`I will be ${obj.age + 3} years old after 3 years.`);

//Template Literals: A way to embed expressions inside string
//String Interpolation: To create strings by doing substitution of placeholders