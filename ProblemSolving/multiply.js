// Problem Description
// You are given two decimal numbers a and b as arguments. You have to implement the function multiplyTwoDecimals which will multiply the two numbers.

// Hint: Use multiplication operator (*)

// Sample Input
// 896.78, 11.5

// Sample Output
// 10312.97

// Explanation
// 896.78 * 11.5 = 10312.97


//Solution
function multiplyTwoDecimals(a, b) {
  let multiply = a * b;
  return multiply;
}
console.log(multiplyTwoDecimals(1,2));
console.log(multiplyTwoDecimals(-896.78, 11.5));
console.log(multiplyTwoDecimals(896.78, -11.5));

