//
var one = prompt ("Please inpute a number between 1 and 10");
var two = prompt ("Please inpute a number between 1 and 10"); 
//
parse1 = parseInt(one);
console.log(parseA);
parse2 = parseInt(two);
console.log(parseB);
//
var redostat = "Your value(s) did not meet the requirments";
//
while (isNaN(parse1) || parse1 < 1 || parse1 > 10){
//
alert(redostat);
one = prompt("Please input a number between 1 and 10 again");
parse1 = parseInt(one);
console.log(parse1);
}
//
while (isNaN(parse2) || parse2 < 1 || parse2 > 10){
//
alert(redostat);
one = prompt("Please input a number between 20 and 50 again");
parse2 = parseInt(two);
console.log(parse2);
}
//
let product = parse1 * parse2;
//
var odd = "This number is odd ";
var even = "This number is even";
//
if (product % 2 == 0){
alert("product + is even");
console.log ("product + is even");
}
else {
    alert(product + "is odd");
    console.log (product + "is odd");
}
;
