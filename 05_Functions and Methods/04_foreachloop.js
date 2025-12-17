// arr.foreach(callBackFunction)

//Call Back Fn: A function that is passed as an argument to another function

//call back example

function abc() {
    console.log("abc");
}
function myFun(callBack) {
    return callBack;
}

console.log(myFun(abc));


let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

console.log("-------")

arr.forEach((val) => {
    console.log(val);
});

console.log("-------")

arr.forEach((val, idx) => {
    console.log(val, idx);
});

console.log("-------")

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});


//forEach is a higher order function. Higher order function is a function that takes another function as an argument.
