//Data Types in JavaScript

//1. Primitive Data Types
//a. String: A sequence of characters enclosed in single or double quotes.
let name = "Binod Dey"; // String

//b. Number: Represents both integer and floating-point numbers.
let age = 20; // Number

//c. Boolean: Represents either true or false.
let isStudent = true; // Boolean

//d. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Null

//e. Undefined: Represents a variable that has been declared but not assigned a value.
let y; // Undefined

//f. Symbol: Represents a unique identifier.
let uniqueId = Symbol("id"); // Symbol

//----------------------------------------------------------------------------//

//2. Non-Primitive Data Types

//a. Object: A collection of key-value pairs.
let person = {
    name: "Binod Dey",
    age: 20,
    isStudent: true
}; // Object

//b. Array: An ordered list of values.
let numbers = [1, 2, 3, 4, 5]; // Array

//c. Function: A block of code designed to perform a particular task.
function greet() {
    console.log("Hello, World!");
} // Function