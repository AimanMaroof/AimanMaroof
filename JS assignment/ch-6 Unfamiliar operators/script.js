// CHAPTER # 06 (UN-FAMILIAR OPERATORS)

// QS.1 --> Initialize a variable num with the value 3. Use the post-increment (num++) operator and assign the result to a new variable newNum. Display both num and newNum in alerts.
let num = 3;
let newNum = num++;
alert("num : " + num);
alert("newNum : " + newNum);

// QS.2 --> Write a program that initializes a variable counter with the value 10. Use counter++ twice in your code, then display the final value of counter in an alert.
let counter = 10;
counter++;
counter++;
alert("The final value of counter : " + counter);


// QS.3 --> Initialize a variable points with the value 20. Use the post-decrement operator (points--) and the pre-increment operator (++points) in separate statements.
//  Display the final value of points in an alert.
let points = 20;
points--;
++points;
alert("The final value of points : " + points);



// QS.4 Write a program that initializes a variable number with the value 0, uses ++number three times in your code, and then displays the final value of number in an alert.
let number = 0;
++number;
++number;
++number;
alert("The final value of number : " + number);

