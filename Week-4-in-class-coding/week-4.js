// 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 
var firstName = ['Jessie', 'Mike', 'Austin', 'Steve', 'Ismael'];
var heightInches =[72, 66, 68, 67, 77];
var comparison = [(72 > 66), (68 == 67), (72 < 77), (66 == 68), (72 == 72)];


// 2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, or Boolean depending on which array was passed in. 
// Hint: You will need an array method to add new items to the end of the array. You will also need conditionals set up to check the item at index 0 so you know what array was passed into the function.  You can use the typeof method to determine what type of data is in the array.  

function total(arr){
if (typeof(arr) == 'string') {
        firstName.push('James');
        return firstName;
    }
else if (typeof(arr) =='number') {
        heightInches.push(32);
        return heightInches;
}
else if (typeof(arr) == 'boolean'){
        comparison.push(77 == 77);
        return comparison;
}
else {return "error"} 
}

console.log(total(21));


// function add(x) {
// if (x >= 2){
//     return x + x;
// }
// else if (x < 2) { 
//     return x * x
// }
// else {
//     return "error";
// }
// }

// console.log(add(2));