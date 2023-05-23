
/*Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

function addByX(n) {
    return function (input) {
        return input + n;
}
};
const addByTwo = addByX(2);

function once(func) {
    const obj = {};
    return function (...args) {
        if (obj.result) {
            return obj.result
        }
        obj.result = func(...args)
        return obj.result
    }
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6