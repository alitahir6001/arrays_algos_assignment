// Algo 1

// Print each array value and the sum so far

var testArr = [6,3,5,1,2,4]  // Given array
var sum = 0;  // Creating a 'box' to hold the sum values
for (var i=0; i <=testArr.length; i++){ // Moving through the array indexes
    sum = sum + testArr[i]; // The sum is equal to the exisitng sum plus the value of index i
    console.log(testArr[i]) // print that index
    console.log("Sum is now " + sum); // print the current sum of values up to that index
}


// Algo 2

// Multiply each value in the array by its array position

\var testArr = [0,3,10,3,8,20]
var prod = 1;
for (var i=0; i <= testArr.length; i++){
    prod = prod * testArr[i];
    console.log(testArr[i])
    console.log("product is now " + prod);  
}

// The second algo is essentially the same as the first, I just replaced the 'sum' var with prod for clarity, as well as adding a * arithmatic operator to give the products as the log, instead of sum.
