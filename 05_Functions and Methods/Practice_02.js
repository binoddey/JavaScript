let arr = [2, 4, 6, 8, 10];

//first way
arr.forEach((val) => {
    console.log(val * val);
});

//second way
let calcSquare = (val) => {
    console.log(val * val)
};
arr.forEach(calcSquare);