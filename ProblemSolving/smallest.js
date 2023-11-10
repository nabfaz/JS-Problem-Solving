// Problem Description
// You are given three numbers a, b and c as arguments. You have to implement the function findSmallest and return the smallest of the three numbers.


// Hint: This is a combination of comparison operator and logical operator.

// Hint: This can be solved using if else.


// Sample Input
// 1, 9, 78


// Sample Output
// 1


// Explanation
// 1 is the output, as it is smaller than 9 and 78.

//Solution

function findSmallest(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(findSmallest(1, 9, 78));
console.log(findSmallest(-896.78, 11.5, -11.5));
console.log(findSmallest(896.78, -11.5, 11.5));
console.log(findSmallest(-896.78, 11.5, 11.5));
console.log(findSmallest(896.78, -11.5, -11.5));
console.log(findSmallest(-896.78, -11.5, 11.5));
console.log(findSmallest(896.78, 11.5, -11.5));

//Testcase 1 - Input: 1, 9, 78 Output: 1
//Testcase 2 - Input: -896.78, 11.5, -11.5 Output: -11.5
//Testcase 3 - Input: 896.78, -11.5, 11.5 Output: 11.5
//Testcase 4 - Input: -896.78, 11.5, 11.5 Output: 11.5
//Testcase 5 - Input: 896.78, -11.5, -11.5 Output: 11.5
//Testcase 6 - Input: -896.78, -11.5, 11.5 Output: 11.5
//Testcase 7 - Input: 896.78, 11.5, -11.5 Output: 11.5


