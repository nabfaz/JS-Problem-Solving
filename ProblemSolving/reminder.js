// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function remainderOfDivision that returns the remainder when you divide the first number by the second number.

// Hint: Choose the correct arithmetic operator that can give the remainder. Remainder will be a whole number.

// Sample Input
// 10, 3

// Sample Output
// 1

// Explanation
// When 10 is divided by 3, we get a quotient of 3 and a remainder of 1.


//solution

function reminderOfDivision(a, b) {
  let reminder = a % b;
  return reminder;
}
console.log(reminderOfDivision(10, 3));
console.log(reminderOfDivision(-896.78, 11.5));
console.log(reminderOfDivision(896.78, -11.5));

//Testcase 1 - Input: 10, 3 Output: 1
//Testcase 2 - Input: -896.78, 11.5 Output: -1.25
//Testcase 3 - Input: 896.78, -11.5 Output: 1.25


