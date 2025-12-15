// for in loop

let student = {
    name: "Rahul",
    age: 20,
    gender: "male"
};

for (let i in student) { // returns keys
    console.log("Keys = ", i, "Values = ", student[i]);
}