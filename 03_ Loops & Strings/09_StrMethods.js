// String Methods
//JavaScript Strings are immutable

let str = "binod dey"

//1. TO UPPERCASE
str.toUpperCase();
console.log(str); // no change
console.log(str.toUpperCase());

//2. TO LOWERCASE
console.log(str.toLowerCase());

//3. LENGTH
console.log(str.length);

//4. INDEX OF
console.log(str.indexOf("b"));

//5. LAST INDEX OFṇ
console.log(str.lastIndexOf("d")); //returns the last index of the string

//6. TRIM
console.log(str.trim("   binod  dey  "));

//7. SLICE
console.log(str.slice(0, 3)); //returns the string from index 0 to 3

//8. SUBSTRING
console.log(str.substring(0, 3)); //returns the string from index 0 to 3

//9. SUBSTR
console.log(str.substr(0, 3)); //returns the string from index 0 to 3


//10. REPLACE
console.log(str.replace("binod", "binod")); //returns the string from index 0 to 3

//11. CONCAT
console.log(str.concat(" is me"));

//12. CHAR AT
console.log(str.charAt(0));

//13. CHAR CODE AT
console.log(str.charCodeAt(0));















