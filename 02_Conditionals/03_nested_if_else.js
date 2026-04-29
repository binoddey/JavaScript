// A nested if statement means placing an if statement inside another if statement.
// It is used when multiple conditions depend on each other.

// ==========================================

let age = 20;
let isStudent = true;
if (age >= 18 && age <= 25) {
    if (isStudent) {
        console.log("You are an adult student.");
    } else {
        console.log("You are an adult but not student.");
    }
}
else {
    console.log("You are not adult");
    
}