// Write your solution in this file!
// write your code here 
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();

}

var bestCustomer;  
function setBestCustomer() {
  bestCustomer = "not bob";

}


function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
 
}


const leastFavoriteCustomer = "someone";
function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = "new least favorite";
}


let var1 = 1;
function firstFunc(var2 = 2) {
  let var3 = 3;
  return var1 + var2;
}
console.log(firstFunc(2,9))