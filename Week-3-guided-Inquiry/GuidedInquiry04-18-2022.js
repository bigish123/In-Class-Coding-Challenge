//Very Easy Question
var number7 = 3;
var number22 = 1;
console.log(`The difference between ${number7} & ${number22} is ${number7 - number22}`);



//Easy Question
let name1 = "alex";
let name2= "ismael";
if (name1.length > name2.length){
    console.log(`The name ${name1} is greater than ${name2} by ${name1.length - name2.length} characters`);
}
else {
    console.log(`The name ${name2} is greater than ${name1} by ${name2.length - name1.length} characters`);
}



//Medium Question 
const feelings = prompt("How are you feeling today?");

if (feelings == feelings.toUpperCase()) {
    console.log("you are shouting");
} else if (feelings == feelings.toLowerCase()){
    console.log("you are whispering");
} else {
    console.log("you are talking normal");
}

//hard
var result;
if (value == `+`) {
    result = parseFloat(numb1) + parseFloat(numb2);
}
else if (value == '-') {
    result = parseFloat(numb1) - parseFloat(numb2);
}
else if (value == '*') {
    result = parseFloat(numb1) * parseFloat(numb2);
}
else if ( value == `/`) {
    result = parseFloat(numb1) / parseFloat(numb2);
}
else {
    alert("wrong value selected: can only choose +, -, *, /. Please Try Again")

// Very Hard 
let numb1 = prompt('pick a number');
let value = prompt('+, -, *, or /');
let numb2 = prompt('pick another number');
var result;

if (value == `+`) {
    result = parseFloat(numb1) + parseFloat(numb2);
}
else if (value == '-') {
    result = parseFloat(numb1) - parseFloat(numb2);
}
else if (value == '*') {
    result = parseFloat(numb1) * parseFloat(numb2);
}
else if ( value == `/`) {
    result = parseFloat(numb1) / parseFloat(numb2);
}
else {
    alert("wrong value selected: can only choose +, -, *, /. Please Try Again")
}
document.write(`the answer is : ${numb1} ${value} ${numb2} = ${result}`);
alert(`the answer is : ${numb1} ${value} ${numb2} = ${result}`);





