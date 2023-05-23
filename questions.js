// q1

const students = [
    {name: "Abhishek", rollNumber: 1, marks: 141},
    {name: "Anurag", rollNumber: 2, marks: 125},
    {name: "Jamie", rollNumber: 3, marks: 112},
    {name: "Nathan", rollNumber: 4, marks: 85}
];


// parameter - students array, returns array of students with marks greater than 90
function getRandomAge () {
    let randomAge = Math.ceil(Math.random()*50);
    return randomAge;
}


function solve (array) {
    return array.filter(student => student.marks > 90).map(student => student.age = getRandomAge());
}

console.log(solve(students));

// console.log(Math.ceil(Math.random()*50));
console.log(fetch("https://dog.ceo/api/breed/hound/list"))