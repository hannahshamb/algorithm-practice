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
//Modified psuedo code above per note to convert to string first
//Added condition to check that solution is not greater than 2 to the 31th power
*/

var reverse = function(x) {
  const negative = x < 0 ? true : false;
  let xString = x.toString().split("");
  123
  "123"
  ["1", "2", "3"]
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
  const solution = xString.join('');
  console.log('solution', solution)
  const newX = negative ? -parseInt(solution, 10) : parseInt(solution, 10);
  return (newX > 2**31 -1) ? 0 : newX;
};

//TEST 1
console.log('reverse(123)', reverse(123))


/* DIFFERENT APPROACH - Split, reverse and join
1. Call the toString method on the x object with no arguments,
chain and call the split method with single quotes as the argument, chain and
call the reverse method with no arguments, and chain and call the join method with
single quotes as the argument
This will turn the x object into a string, split the string it into an array,
reverse the order of the items in the array, and rejoin the array and change it
back into a string (joining together)
2. Check if the solution is within bounds (if it is greater than 2 to the
power of 31 minus one, ensure to return 0), else return the number value of
the solution using parseInt
*/



var reverse = function (x) {
  if (x < 0) return -1 * reverse(-x);
  const solution = x.toString().split('').reverse().join('');
  return (solution > 2**31 -1) ? 0 : parseInt(solution, 10);
};

// //TEST 1
console.log('reverse(123)', reverse(123));
