//1. selecting with ID = document.getElementById("my ID")

let heading = document.getElementById("heading");
console.log(heading);

//2. selecting with class = document.getElementsByClassName("my class")
let para = document.getElementsByClassName("para");
console.log(para);
console.dir(para);

//3. selecting with tag name = document.getElementsByTagName("my tag")
let para2 = document.getElementsByTagName("p");
console.log(para2);
console.dir(para2);

//4. selecting with query selector = document.querySelector("my selector")
let element = document.querySelector(".para2"); //selects first element with class para2
console.log(element);
console.dir(element);

//5. selecting with query selector all = document.querySelectorAll("my selector")
let element2 = document.querySelectorAll(".heading"); //selects all elements with class para2
console.log(element2);
console.dir(element2);

