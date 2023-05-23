function multiply(x, y) {
    return x * y;
};

function yell(lc_str) {
    console.log(lc_str.toUpperCase());
};

function longerThan(arr1, arr2) {
    return (arr1.length > arr2.length);
};

// console.log(multiply(5, 4));
// yell("abhishek")
// console.log(longerThan([12, 14, 123, 41], [12, 41, 124]));





/*
Arrow Functions: 
The => "fat arrow" lets us create an unnamed function without much code. AKA an Arrow function
e.g. (x, y) => x + y;


Since arrow functions are expressions, we can assign them to a variable.
e.g. const add = (x, y) => x + y; IS EQUIVALENT TO:
function add(x, y) {
    return x + y;
}

Arrow functions are great when just want to return a value 

For one parameter functions, parentheses are optional. 

for multiple parameters, parantheses are important. 


If we need to do more than just return a value, we can use curly braces for a "normal" function 
body. In that case, we still need a return 

const addAndLog = (x, y) => {
    let sum = x + y; 
    console.log('The sum is', sum);
    return sum;
}
*/


// Task - arrow functions 

const divide = (x, y) => x / y;

const whisper = (up_str) => up_str.toLowerCase();

const shorterThan = (array1, array2) => array1.length < array2.length;

// console.log(divide(5, 6));
// console.log(whisper("ABHISHEK"));
// console.log(shorterThan([1],[2, 3]));




