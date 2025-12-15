let array = ["A", "B", "C", "D", "E"];
console.log(array);

let marks = [37, 78, 87, 100, 92];
console.log(marks);
console.log(marks.length);
console.log(marks[0]);

//print all elements of array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

//for-of
for (let element of marks) {
    console.log(element);
}