const num = 3;
function multiplyBy2 (inputNumber){
const result = inputNumber*2;
return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

console.log(output);



/*
Three Core Components: 
1. Thread of Execution 
2. Memory
3. Call stack


1. Goes through the code
line-by-line and runs/ ’executes’
each line - known as the 
THREAD OF EXECUTION

2. Saves ‘data’ like strings and
arrays so we can use that data
later - in its MEMORY
We can even save code
(‘functions’)

3. JavaScript keeps track of what
function is currently running. Run a function
- add to call stack. 
Finish running the function - JS 
removes it from call stack. 
Whatever is on top of the call stack, 
- that's the function we're currently running
*/

