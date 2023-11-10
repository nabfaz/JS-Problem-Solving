// Problem Description
// You are given three numbers side1, side2 and side3 as arguments. You have to implement the function isEquilateralType that will return true if all the sides are equal else it will return false.

// Please note: All the sides will be greater than 0, that is side1> 0, side2> 0 and side3> 0.


// Hint: Equilateral means values of side1, side2 and side3 should be equal.


// Sample Input
// 9, 9, 9


// Sample Output
// true


// Explanation
// All the sides are equal therefore the output is true.

//Solution

function isEquilateralType(side1, side2, side3) {
  if (side1 == side2 && side2 == side3) {
    return true;
  } else {
    return false;
  }
}
console.log(isEquilateralType(9, 9, 9));
console.log(isEquilateralType(9, 9, 8));
console.log(isEquilateralType(9, 8, 9));
console.log(isEquilateralType(9, 8, 8));


//Testcase 1 - Input: 9, 9, 9 Output: true
//Testcase 2 - Input: 9, 9, 8 Output: false
//Testcase 3 - Input: 9, 8, 9 Output: false
//Testcase 4 - Input: 9, 8, 8 Output: false
//Testcase 5 - Input: 8, 9, 9 Output: false
//Testcase 6 - Input: 8, 9, 8 Output: false
//Testcase 7 - Input: 8, 8, 9 Output: false
