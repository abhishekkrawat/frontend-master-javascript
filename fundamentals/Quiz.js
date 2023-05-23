/*
In a HTML document, the JavaScript lives in the "<script>" element  (go to Quiz.html)

the changes made in script (TODO- 1, 2 and 3)
    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statement = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    const optionButtons = document.querySelector("#options").children;
    // explanation should be the "explanation" div
    const explanation = document.getElementById("explanation");

    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    const fact = {
        statement: "Null and undefined are same",
        answer: true,
        explanation: "Null is a deliberate nothing and undefined is an accidental nothing"
    };


    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement;

*/

