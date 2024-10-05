// CHAPTER # 08 (PROPMTS)




// QS.1 --> Write a script that asks the user, "What is your name?" and stores the answer in a variable userName. Then, display an alert that says "Hello, [userName]!".
prompt("What is your name?", "Aiman Maroof");
let userName = "Aiman Maroof";
alert("Hello!, " + userName);





// QS.2 --> Create a prompt that asks the user, "How old are you?" and assigns the response to a variable age. Display an alert that says "You are [age] years old." Handle the case where the user clicks "Cancel" by displaying "No age provided" in the alert.
// Ask the user for their age
let age = prompt("How old are you?");

// Check if the user clicked "Cancel" or provided an empty input
if (age === null || age === "") {
  alert("No age provided");
} else {
  alert("You are " + age + " years old.");
}





// QS.3 --> Write a prompt asking, "How many pets do you have?" and assign the response to a variable pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter anything."
let pets = prompt("How many pets do you have?");
if(pets === null || pets === "") {
    alert("You didn't enter anything.");
} else{
    alert("You have "  + pets +  " pets.");
}





// QS.4 --> Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a number, then multiply it by 2 and display the result in an alert. 
let number = prompt("Enter a number between 1 and 10");

if(number === "" || number === "null"){
    alert("You did not enter a valid nmuber");
} else {
    let result = number * 2;
    alert("The result of multiplying your number by 2 is : " + result);
}





// QS.5 Write a prompt that asks the user, "What is your favorite number?" and assigns the response to a variable favNum. If the user does not provide a response and clicks "OK", assign a default value of 7 to favNum and display it in an alert.
let favNum = prompt("What is your favourite number?");
if(favNum === "") {
    favNum = 7;
    alert("Your favourite number is 7");
} else{ 
    alert("Your favourite number is : " +favNum);
}






