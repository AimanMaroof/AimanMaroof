// CHAPTER - 09 {IF STATEMENTS}



// QS.1 --> Prompt and If Statement: Write a script that asks the user "What is the capital of France?" If the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try again!"
// Define the country and its capital
const country = "France";
const correctCapital = "Paris";

// Prompt the user for the capital of the country
let myAnswer = prompt(`What is the capital of ${country}?`);

// Check the user's answer
if (myAnswer && myAnswer.toLowerCase() === correctCapital.toLowerCase()) {
    alert("Correct!");
} else {
    alert(`Try Again!`);
}



// QS.2 --> If-Else Statement:
// Modify the previous script to use an else statement. If the user's answer is correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."
// Ask the user a question
let myAnswerTwo = prompt("What is the capital of America?");

// Check the user's answer
if (myAnswerTwo.toLowerCase() === "Wahington D.C.") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Washington D.C.");
}





// QS.3 --> Multiple Correct Answers: Write a program that asks the user, "What is the capital of the United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an if-else condition to check both possible answers.
// Ask the user a question
let yourAnswer = prompt("What is the capital of the United Kingdom?");

// Check the user's answer
if (yourAnswer.toLowerCase() === "london" || yourAnswer.toLowerCase() === "the united kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}


// QS.4 --> Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every time the user answers a question correctly, increment the score by 1 and display the updated score.
// Initialize the score
let score = 0;

// Ask the user a question
let userAnswer = prompt("What is the capital of the United Kingdom?");

// Check the user's answer
if (userAnswer.toLowerCase() === "london" || userAnswer.toLowerCase() === "the united kingdom") {
    score++;  // Increment the score by 1
    alert("Correct! Your score is now: " + score);
} else {
    alert("Incorrect, the correct answer is London. Your score is: " + score);
}



// QS.5 --> Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You got both right!". If only one answer is correct, display "You got one correct!".
// Ask the user the first question
let capitalAnswer = prompt("What is the capital of Germany?");
let mathAnswer = prompt("What is 10 + 10?");

// Initialize variables to track correctness
let isCapitalCorrect = (capitalAnswer.toLowerCase() === "berlin");
let isMathCorrect = (parseInt(mathAnswer) === 20);

// Check the answers and display the appropriate message
if (isCapitalCorrect && isMathCorrect) {
    alert("You got both right!");
} else if (isCapitalCorrect || isMathCorrect) {
    alert("You got one correct!");
} else {
    alert("Both answers are incorrect.");
}



