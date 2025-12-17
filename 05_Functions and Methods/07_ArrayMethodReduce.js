//reduce = performs some operations and reduces array to a single value . It returns that single value. 

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((res, cur) => {
    return res + cur;
});
console.log(sum);

//res = previous value, cur = current value
// result updates as result of last 2 and curr updates one by one