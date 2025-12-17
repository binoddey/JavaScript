// MAP = Creates a new array by applying a function to each element of the original array

//arr.map(callBackFn)

let arr = [1, 2, 3];

let square = arr.map((val) => {
    return val * val;
});
console.log(square);
console.log(arr);
