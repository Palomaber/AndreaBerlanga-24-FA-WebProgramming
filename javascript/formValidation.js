//event listener for submission
document.querySelector('form').addEventListener('submit', callingFunction);

// Function 1
//for form submission
function callingFunction(event) {
    event.preventDefault();
    
//gets form input values
    const fName = document.getElementById("fullName").value;
    const pNumber = document.getElementById("phone").value;
    const tBox = document.getElementById("message").value;

//checks inputs before proceeding
    if (!validatingInputs(fName, pNumber)) {
//if validation fails
        return;  
    }

//calculate total price
    const totalOrder = totalPrice();
    
//Log the form data and total price to the console
    console.log(`User's name: ${fName}`);
    console.log(`User's phone number: ${pNumber}`);
    console.log(`Added message: ${tBox}`);
    console.log(`Your final total is ${totalOrder}`);
}

// Function 2
//validates form inputs
function validatingInputs(fName, pNumber) {
    if (fName === "" || pNumber === "") {
        if (fName === "") {
            alert("Please attach full name!");
            document.getElementById("fullName").focus();  // Focus on the empty field
        }
        if (pNumber === "") {
            alert("Please attach phone number!");
            document.getElementById("phone").focus();  // Focus on the empty field
        }
//validation works or not
    return false;  
    }
    return true;  
}

// Function 3
//calculates total price of the items
function totalPrice() {
    let totalOrder = 0;

const item1 = document.getElementById("Dessert Recipies");
const item2 = document.getElementById("Brewers Recipies");
const item3 = document.getElementById("Dessert  & Brewers Recipies");
// dding price of item1, item2, item3
if (item1.checked) {
    totalOrder += parseFloat(item1.value);  
}
if (item2.checked) {
    totalOrder += parseFloat(item2.value); 
}
if (item3.checked) {
    totalOrder += parseFloat(item3.value);  
}
// Returning total price
    return totalOrder;  
}

