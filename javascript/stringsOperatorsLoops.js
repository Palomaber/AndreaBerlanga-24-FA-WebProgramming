
//three variables, storing string sentences
let sentence1= "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
let sentence2= "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
let sentence3= "This summer they plan on traveling to El Paso to visit as many family members as possible.";
//sentence 1 stored string variables
var family5 = sentence1.slice(10, 11);
var family4 = sentence1.slice(52, 53);
var family1 = sentence1.slice(127, 128);
//sentence 2 stored string variables
var family6 = sentence2.slice(15, 16);
var family2 = sentence2.slice(63,64);
var family100 = sentence2.slice(96, 99);
//extracted values from variable 100
var family10 = family100.substring(-3,3);
var family0 = family100.substring(3);
//converts variables to actual numbers
var family0 = parseInt("0");
var family1 = parseInt("1");
var family2 = parseInt("2");
var family4 = parseInt("4");
var family5 = parseInt("5");
var family6 = parseInt("6");
var family10 = parseInt("10");
var family100 = parseInt("100");
//calculats total number of family
let sumTotal = family5 + family4 + family1 + family6 + family2 + family10;
console.log("The variable sumTotal is storing" + sumTotal);
//extracting "SA" from sentence2... between line 41, 52
let SA = sentence2.slice(41, 52);
console.log(SA);
//using extracted "SA" and and sentence3  to store following sentence
sentence3 = sentence3.replace ("El Paso", SA);
console.log(sentence3);
//count starts at 1
let i = family0;
//while loop displays count
while (i < family10){
    i++;
//
    console.log("I saw" + i + "car(s) on my trip.");
}
