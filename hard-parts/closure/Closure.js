/*
Closure: 
Build iterators, handle partial application and maintain state in an
asynchronous world

*/

// let constant = 2;
// const multiplyBy2 = () => constant * 10
// console.log(multiplyBy2());



// function outer ()   {
//     let counter = 0;
//     function incrementCounter () { 
//         counter ++;
//     return counter;
//     }
//     return incrementCounter;
// }

// const myNewFunction = outer();
// console.log(myNewFunction());
// console.log(myNewFunction());

// const anotherFunction = outer();
// console.log(anotherFunction());
// console.log(anotherFunction());




// let c = 0;
// function test() {
//     return ++c
// }

// console.log(test());
// console.log(test());



function multiplyBy2(num) {
    return num * 2;
}

console.log(multiplyBy2(7));
console.log(multiplyBy2(10));