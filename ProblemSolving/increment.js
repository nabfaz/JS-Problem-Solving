// Problem Description
// You are given a number a as an argument. You have to implement the function incrementNumber that will increment the number by 1 and return the result.

// Hint: Use addition operator (+).

// Sample Input
// 10

// Sample Output
// 11

// Explanation
// 10 + 1 = 11

//solution
function incrementNumber(a) {
  let increment = a + 1;
  return increment;
}
console.log(incrementNumber(10));
console.log(incrementNumber(99));
console.log(incrementNumber(-2));
console.log(incrementNumber(-1000));

//Testcase 1 - Input: 10 Output: 11
//Testcase 2 - Input: 99 Output: 100
//Testcase 3 - Input: -2 Output: -1
//Testcase 4 - Input: -1000 Output: -999