// Problem Description
// You are given a number num as an argument. You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.

// Hint: Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly divided by 2.

// Hint: You can use conditionals to implement it.

// Sample Input
// 10

// Sample Output
// Even

// Explanation
// 10 is divisible by 2 hence the output is Even.

//solution

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(10));
console.log(evenOrOdd(9));
console.log(evenOrOdd(8));
console.log(evenOrOdd(7));
console.log(evenOrOdd(6));
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));
console.log(evenOrOdd(3));
console.log(evenOrOdd(2));

//Testcase 1 - Input: 10 Output: Even
//Testcase 2 - Input: 9 Output: Odd
//Testcase 3 - Input: 8 Output: Even
//Testcase 4 - Input: 7 Output: Odd
//Testcase 5 - Input: 6 Output: Even
//Testcase 6 - Input: 5 Output: Odd
//Testcase 7 - Input: 4 Output: Even
//Testcase 8 - Input: 3 Output: Odd
//Testcase 9 - Input: 2 Output: Even
//Testcase 10 - Input: 1 Output: Odd
