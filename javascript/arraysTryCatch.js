//about site array values
let siteTopics = ["Recipes", "Baking", "Brews", "Pastries", "Cafe"];
//days of the week array values
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//variables of first name and date of birth
let firstName = "Andrea";
let yearBorn = 2008;
//add item to end array
siteTopics.push("Bakery");
//projected array length
console.log("The length of the siteTopics array is " + siteTopics.length);
//using a while loop to end siteTopic array
let i = 0;
  while (i < siteTopics.length){
  console.log(siteTopics[i]);
i++;
}
//reverse order of dayNames
dayNames.reverse();
//
for (var a = 0; a < dayNames.length ; a++){
  console.log(dayNames[a]);
}
//remove first item in dayNames
dayNames.shift();
//using try and catch method to check if Sunday is still the first item
try {
  if (dayNames[0] === "Sunday"){
    throw "Error: Sunday should be missing!"

  }

} catch(error) {
//projecting error if sunday is still them first item
    console.log(error);
} finally {
//showing statement with vaiables and dates from the array
    console.log(firstName + " was born in the year " + yearBorn + ". I think the day was either a " + dayNames[1] +  " or " + dayNames[3] + ".");
}
