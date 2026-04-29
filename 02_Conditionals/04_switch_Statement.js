// The switch statement is used to execute different blocks of code based on different conditions.
// It is often cleaner than multiple else if statements.

// ==========================================

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break; 
    case "Thursday":
        console.log("Today is Thursday.");
        break;  
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;  
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");

}


/* What does this code do?

This code uses a switch statement to check the value of the variable 'day' and prints a message to the console based on the value. If 'day' is "Monday", it will print "Today is Monday." If 'day' is "Tuesday", it will print "Today is Tuesday.", and so on for each day of the week. If 'day' does not match any of the cases, it will execute the default case and print "Invalid day."

*/ 