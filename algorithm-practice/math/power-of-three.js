/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.


Input: n = 27
Output: true
Explanation: 27 = 3^3

Input: n = 0
Output: false
Explanation: There is no x where 3^x = 0.

Input: n = -1
Output: false
Explanation: There is no x where 3^x = (-1).
*/

var isPowerOfThree = function (n) {
let isPowerOfThree = false;
let i = 0;

function powerChecker(n, i) {
  if (Math.pow(3, i) === n) {
    isPowerOfThree = true;
  }
  if (Math.pow(3, i) < n) {
    i++
    powerChecker(n, i)
  }
}
powerChecker(n, i);
return isPowerOfThree;
};

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(-1))
console.log(isPowerOfThree(0))
