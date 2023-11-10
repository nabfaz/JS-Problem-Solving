// Problem Description
// You are given three numbers a, b and c as arguments. You have to implement the function compareNumbers such that EITHER the first number is equal to the second OR the second number is equal to the third, return true. Else, return false.


// Hint: This is a combination of comparison operator and logical operator.


// Sample Input
// 10, 99, 99


// Sample Output
// true


// Explanation
// The second number (99) and third number (99) are equal, hence true.

//Solution

function compareNumbers(a, b, c) {
  if (a === b || b === c) {
    return true;
  } else {
    return false;
  }
}
console.log(compareNumbers(10, 99, 99));
console.log(compareNumbers(-100, -100, -100));
console.log(compareNumbers(-100, -100, 100));
console.log(compareNumbers(-100, 100, -100));
