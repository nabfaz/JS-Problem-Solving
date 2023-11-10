// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function findLargest that will return the largest number between the two numbers.


// Hint: Use comparison operator (>).

// Hint: This can be solved using if else.


// Sample Input
// 1, 9


// Sample Output
// 9


// Explanation
// As 9 is greater than 1, return 9.

//Solution
function findLargest(a,b){
  if(a>b){
    return a;
  }else{
    return b;
  }
}
console.log(findLargest(1,9));
console.log(findLargest(9,1));
console.log(findLargest(9,9));
console.log(findLargest(9,8));
console.log(findLargest(8,9));

//Testcase 1 - Input: 1, 9 Output: 9
//Testcase 2 - Input: 9, 1 Output: 9
//Testcase 3 - Input: 9, 9 Output: 9
//Testcase 4 - Input: 9, 8 Output: 9
//Testcase 5 - Input: 8, 9 Output: 9