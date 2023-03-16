/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range
[-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit
integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
*/

/* APPROACH
1. Check if the value is negative and save that information
2. Convert the number into a string using the toString method
3. Create a left and right pointer - right starting at the end of the string
(length of string minus 1), left starting at 0
4. While right is greater than left, create a while loop
5. In the while loop, create a hold variable and assign it the value of the left
6. Assign the value of the left to the right
7. Assign the value of the right to the hold variable (what left was before)
8. Increment left
9. Decrement right
10. When the while loop ends, convert the result back to an integer using the
parseInt method
11. Ensure to add a negative if the negative variable is true
12. Return the x


ABOVE only works if you convert it to an array first
*/

var reverse = function(x) {
  const negative = x < 0 ? true : false;
  let xString = x.toString();
  //Testing if conversion worked
  console.log('xString', xString, typeof xString)
  console.log(xString[0])
  let left = 0;
  let right = xString.length - 1;
  while (left < right) {
    console.log('right', right);
    console.log('left', left)
    const hold = xString[left];
    xString[left] = xString[right];
    xString[right] = hold;
    left++
    right--
  }
  console.log(xString)
  const newX = negative ? -parseInt(xString, 10) : parseInt(xString, 10);
  return newX
};

//TEST 1
console.log('reverse(123)', reverse(123))
