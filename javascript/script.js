//Variables

//First and Last Name Variables
var fname = "Andrea";
var lname = "Berlanga";

//Sent Variables
var sentence ="Find your recipe with your Warm Wonders"

//thetruth variable declaration
var theTruth = true;

//variables for 10, 15, 25
var numTen = 10;
var numFifteen = 15;
var numTwentyFive = numTen + numFifteen; //calculating for sum??

//use concatenation to display the first and last name
console.log(fname + " " + lname);

//display one of the sentence variable's length
console.log(
    "The length of my sentence is " + sentence.length + " characters long."
)  

//variable storing a reference to the paragraph where we want to display our message.
var statementParagraph = document.getElementById("truth-paragraph");

//boolean variable indicates whether the statement is true or not.
var isTruth = true; 

//function to update the paragraph text based on the value of `isTruth`.
function updateTruthStatement() {

// If the statement is true, display the corresponding message.
if (isTruth) {
    statementParagraph.textContent = "🌟 Yes, the statement is true!";
  } 
  // Otherwise, show a message indicating the statement is false.
  else {
    statementParagraph.textContent = "🚫 No, the statement is false.";
  }
}

//update for the text when the page loads.
updateTruthStatement
();
