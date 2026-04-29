let balance = 10000;
let option = "withdraw";
let amount = 3000;

switch (option) {

    case "check_balance":
        console.log("Your balance is:", balance);
        break;

    case "withdraw":

        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawal successful.");
            console.log("Remaining balance:", balance);
        } else {
            console.log("Insufficient balance.");
        }

        break;

    case "deposit":

        balance = balance + amount;

        console.log("Deposit successful.");
        console.log("Updated balance:", balance);

        break;

    default:
        console.log("Invalid option");
}