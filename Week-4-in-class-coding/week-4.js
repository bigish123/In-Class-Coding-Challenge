// 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 
let firstName = ['Jessie', 'Mike', 'Austin', 'Steve', 'Ismael'];
let heightInches = [72, 66, 68, 67, 77];
let comparison = [(72 > 66), (68 == 67), (72 < 77), (66 == 68), (72 == 72)];


// 2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, or Boolean depending on which array was passed in. 

function total() {
    if (x == firstName) {
        firstName.push('James');
    }
else if ( x == heightInches) {
        heightInches.push(32);
}
else if ( x == comparison){
        comparison.push(77 == 77);
}
}