// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.

// Hint: Use addition operator (+).
// Hint: Use a new variable which can be used to store and return the sum.

// Sample Input
// 89, 11

// Sample Output
// 100

// Explanation
// We get 89 + 11 = 100

//Solution

function sumOfTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(sumOfTwoNumbers(89, 11));
console.log(sumOfTwoNumbers(100, 100));
console.log(sumOfTwoNumbers(20, 2000000));
console.log(sumOfTwoNumbers(3, 4));
console.log(sumOfTwoNumbers(89, 11));
console.log(sumOfTwoNumbers(99, -1));

//Testcase 1 - Input: 89, 11 Output: 100
//Testcase 2 - Input: 100, 100 Output: 200
//Testcase 3 - Input: 20, 2000000 Output: 20000000
//Testcase 4 - Input: 3, 4 Output: 7
//Testcase 5 - Input: 89, 11 Output: 98
//Testcase 6 - Input: 99, -1 Output: 98
//Testcase 7 - Input: 99, 1 Output: 100
