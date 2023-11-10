// Problem Description
// You are given a number a as an argument. You have to implement the function findCube that will return the cube of that number. Cube of a number basically means the number is multiplied by itself thrice.

// Hint: Use multiplication operator (*).

// Sample Input
// 3

// Sample Output
// 27

// Explanation
// Cube of 3 would be 3 x 3 x 3 = 2 7

//Solution
function findCube(a) {
  let cube = a * a * a;
  return cube;
}
console.log(findCube(3));
console.log(findCube(4));
console.log(findCube(5));
console.log(findCube(6));
console.log(findCube(7));
console.log(findCube(8));
console.log(findCube(9));
console.log(findCube(10));

//Testcase 1 - Input: 3 Output: 27
//Testcase 2 - Input: 4 Output: 64
//Testcase 3 - Input: 5 Output: 125
//Testcase 4 - Input: 6 Output: 216
//Testcase 5 - Input: 7 Output: 343
//Testcase 6 - Input: 8 Output: 512
//Testcase 7 - Input: 9 Output: 729
//Testcase 8 - Input: 10 Output: 1000