/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.



Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].


Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
*/


var plusOne = function (digits) {
  const newArray = digits.slice(0, (digits.length - 1));
  const currentLastDigit = digits[digits.length -1];
  const newLastDigit = currentLastDigit + 1;
  if (newLastDigit === 10) {
    //check if there is anything before, if so add it to the 9 - if that is a nince, update all.
    newArray.push(1);
    newArray.push(0);
  } else {
    newArray.push(newLastDigit);
  }

  return newArray;
};

function plusOne2(digits) {
  let carry = 1; // Initialize carry to 1 since we want to increment by 1.

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10; // Update the current digit.
    carry = Math.floor(sum / 10); // Calculate the carry for the next iteration.
  }

  // If there's still a carry after the loop, we need to add an additional digit.
  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}


console.log(plusOne2([1, 2, 3]))
console.log(plusOne2([9]))
console.log(plusOne2([9, 9]))
console.log(plusOne2([4, 3, 2, 1]))
console.log(plusOne2([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
