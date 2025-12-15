let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 1. Push() : add to end
arr.push(6, 7);
console.log(arr);  //changes the initial array

// 2. Pop() : remove from end
arr.pop();
console.log(arr);  //changes the array we get after push

// 3. Shift() : remove from start
arr.shift();
console.log(arr);  //changes the array we get after pop

// 4. Unshift() : add to start
arr.unshift(1);
console.log(arr);  //changes the array we get after shift

// 5. toString() : convert array to string
console.log(arr.toString()); //returns a string representation of the array

// 6. join() : join array elements with a string
console.log(arr.join("-")); //returns a string representation of the array

//7. slice() : returns a new array with the selected elements
console.log(arr.slice(1, 3)); //returns a new array with the selected elements

//8. splice() : remove elements from array
arr.splice(1, 2); //removes 2 elements from index 1
console.log(arr);