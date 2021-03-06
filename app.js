// This program uses an if/else if statement to assign a
// letter grade of A, B, C, D, or F to a numberic test score.

// Create named constants to hold minimum
// scores required for each letter grade.
var MIN_A_SCORE = 90;
var MIN_B_SCORE = 80;
var MIN_C_SCORE = 70;
var MIN_D_SCORE = 60;

// Get the numberic scores
var testScore = prompt("Enter you numberic test score and I will tell you the letter grade you earned: ", "");
console.log("You entered: " + testScore);

// Determin the letter grade
if (testScore >= MIN_A_SCORE)
  var grade = 'A';
else if  (testScore >= MIN_B_SCORE)
  var grade = 'B';
else if  (testScore >= MIN_C_SCORE)
  var grade = 'C';
else if  (testScore >= MIN_D_SCORE)
  var grade = 'D';
else if  (testScore >= 0)
  var grade = 'F';

// Display the letter grade
document.getElementById("letter-grade").innerHTML = grade;
