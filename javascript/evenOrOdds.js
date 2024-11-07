// projected sentence
var one = prompt("Please input a number between 1 and 10");
var two = prompt("Please input a number between 1 and 10"); 
// turn values into numbers
var parse1 = parseInt(one);
console.log(parse1);
var parse2 = parseInt(two);
console.log(parse2);
// message for invalid input
var fix = "Your value(s) did not meet the requirements";
// confirm first second number
while (isNaN(parse1) || parse1 < 1 || parse1 > 10) {
alert(fix);
one = prompt("Please input a number between 1 and 10 again");
parse1 = parseInt(one);
console.log(parse1);
}
// confirm second second number
while (isNaN(parse2) || parse2 < 1 || parse2 > 10) {
alert(fix);
two = prompt("Please input a number between 1 and 10 again");
parse2 = parseInt(two);
console.log(parse2);
}
// multipy inputed numbers
let product = parse1 * parse2;
// figuring out if multiplied numbers are even or odd
if (product % 2 === 0) {
alert(product + " is even");
console.log(product + " is even");
} 
else {
alert(product + " is odd");
console.log(product + " is odd");
}

