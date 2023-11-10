//Problem Description
//You are given two numbers a and b as arguments. You have to implement the function isEqual that will return true if the numbers are equal, else return false.
//Hint: Use comparison operator (===).
//Hint: Comparison operators return a boolean value. Use a new variable which can be used to store and return the result.
//Hint: You can also use "if else" to solve this problem.
//Sample Input
//89, 11
// Sample Output
//false
//Explanation
//89 is not equal to 11, so return false.

//Solution
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(10, 10));


//Testcase 1 - Input: -1,-1 Output: true
//Testcase 2 - Input: 0,0 Output: true
//Testcase 3 - Input: 100,100 Output: true
//Testcase 4 - Input: 2000000,2000000 Output: true
//Testcase 5 - Input: 3,4 Output: false
//Testcase 6 - Input: 89,11 Output: false
//Testcase 7 - Input: 99,-1 Output: false
