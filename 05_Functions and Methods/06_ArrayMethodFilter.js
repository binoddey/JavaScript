// Filter = Creates a new array with all elements that pass the test implemented by the provided function

let arr = [1, 2, 4, 5, 7, 9]; // Filter all even elements

let evenArr = arr.filter((val) => {
    return val % 2 == 0;
})
console.log(evenArr); // [2,4]