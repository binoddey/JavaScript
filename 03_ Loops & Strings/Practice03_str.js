let username = prompt("Enter your full name");
let usernameWithoutSpaces = username.replaceAll(" ", "");
let usernameLowerCase = usernameWithoutSpaces.toLowerCase();

console.log('@' + usernameLowerCase + usernameLowerCase.length);