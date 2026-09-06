let mycustomerName = "Jane Doe";
console.log(mycustomerName);

const TAX_RATE = 0.08;
console.log(TAX_RATE);
const PI = 3.14;
console.log(PI);
const isMyActive = true;
console.log(isMyActive);

let visitCount = 1;
console.log(visitCount);
visitCount = visitCount + 1;
console.log(visitCount);

var legacyMessage = "var works, however let and const are preferred";
console.log(legacyMessage);

/*String */
let customerAddress= "123 Hope Avenue";
console.log("Customer Address is : " + customerAddress);
console.log(`Using Template Literal - Customer Address is: ${customerAddress}`);

let num1 = 5; num2 = 7;
let sum = num1 + num2;
console.log(sum);

let bookNum = 25;
const isCheckedIn = true;
console.log("Is Book " + bookNum + " checked in? " + isCheckedIn);''
console.log(`Using Template Literal Is Book ${bookNum} checked in?  ${isCheckedIn} `);

/*Array stores an collection, index begins with 0, declare as a const*/

//Create array
const purchases = [21, 75, 0, 19, 150];
console.log(purchases);

//Add element to the end of the array
purchases.push(35);
console.log(purchases);

//Access element in array
console.log(purchases[3]);

//Reports the number of elements in an array
console.log(purchases.length);

/* An Object groups related information using property names */


const customerName = "Jane Doe";
const membershipType = "Standard";
const accountBalance = 150;
const isActive = true;

const customer = {
    name: customerName,
    membership: membershipType,
    accountBalance: accountBalance,
    active: isActive,
    purchases: purchases
};
console.log(customer);

/* To retrieve external input arguments from the command lind using process.argv*/

const [, , subscriberName, planName, balanceInput]= process.argv;

const subscription = {
    subscriber: subscriberName,
    plan: planName,
    balanceDue: Number(balanceInput)
};
console.log("Subscription Information:");
console.log(`Subscriber: ${subscription.subscriber}`);
console.log(`Plan: ${subscription.plan}`);
console.log(`Balance Due: $${subscription.balanceDue}`);

console.log(
    `Summary: ${subscription.subscriber} is on the ${subscription.plan} plan and owes $${subscription.balanceDue}.`
);

/* Function named reuable block of code, membership is a parameter which is a local variable that receive input*/
//Arithmetic operators + , -, * , /, %,
//control flow , if...else if conditional statements

function getDiscountRate(membership){
    const normalizedMembership = membership.toLowerCase(); 

    if (normalizedMembership === "premium"){
        return 0.10;
    }else if(normalizedMembership === "standard"){
        return 0.05;
    }else{
        return 0;
    }
}  
const discountRate = getDiscountRate("PREMIUM");
console.log(discountRate.toFixed(2));

/*Arithmetic Operators
+ addition:
- subtraction:
* multiplication: 
/ division:

*/
const subtotal = 200;
const startingBalance = 50;
const numberOfPurchases = 4;
const rewardPoints = 275;

const discountAmount = subtotal * discountRate;
const finalPurchaseTotal = subtotal - discountAmount;
const updatedBalance = startingBalance + finalPurchaseTotal;
const averagePurchase = subtotal / numberOfPurchases;
const pointsRemainder = rewardPoints % 100;

console.log(`Discount: $${discountAmount}`);                 
console.log(`Final Total: $${finalPurchaseTotal}`);          
console.log(`Updated Balance: $${updatedBalance}`);         
console.log(`Average Purchase: $${averagePurchase}`);       
console.log(`Remaining Points: ${pointsRemainder}`); 

/* for loop and continue - repeats a known number of time, starting index at 0
   continue - skips the remaining statements for the current index value and move to the next  index value
*/

//purchases = [21, 75, 0, 19, 150, 35];
let total = 0;
for(let index = 0; index < purchases.length; index++){
    let purchase = purchases[index];
    
    if(purchase <= 0){
        continue;
    }

    total = total + purchase;

}
const grandTotal = total;

console.log(`Grand Total: ${grandTotal}`);


/* for..of reads elements directly from the array, 
break ends the loop completely after the first purchase of 100.00 is found 
*/
//purchases = [21, 75, 0, 19, 150, 35];

 let largePurchase;
 for(const purchase of purchases){
     if(purchase >= 100){
        largePurchase = purchase;
        break;
     }
 }
 console.log(`Large Purchase ${largePurchase}`);


 /*
 While loop repeats as long as it condition is true, remember increment your counter
  */
 let reminderNumber = 1;
 while (reminderNumber <= 3){
    console.log(`Reminder ${reminderNumber}`);
    reminderNumber++;
 }

/*
    Basic error handling prevents a programm from unexpectedly crashing;  in JavaScript we use
    try..catch blocks to detect an error and respond to it gracefully

    try -  block runs code that could cause an error
    catch - block receives the error and displays a clear message so the program does not unexpectedly crash.
 */
function checkBalance(value){
    try{
        const balance = Number(value);
        
        if(Number.isNaN(balance)){
            throw new Error("Balance must be a number.");
        }
        console.log(`Balance: $${balance}`);

    }catch(error){
        console.error(`Error: ${error.message}`);
    }
}

checkBalance(150);
checkBalance("hello");










