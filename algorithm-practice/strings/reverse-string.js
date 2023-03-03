/*
Write a function that reverses a string.
The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.


Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

var reverseString = function (s) {
  let copyArray = s.slice();
  let reverse = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    s[i] = copyArray[reverse];
    reverse--
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]))


// 2 pointer approach
// create two pointers
// left pointer starting at index 0
// right pointer starting at index s.length minus 1 (last element of the string)
// create a while loop checking if left is still less than right
// create a hold variable to hold the string at left index value
// assign the string at left index to the value of the string at the right index
// assign the right index to the value of the hold (original left value)
// - essentially swapping right and left values -
// Increment the left value
// Decrement the right value
// while loop will end when the left and right pointers become equal (if relevant)

var reverseString2Pointer = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const hold = s[left];
    s[left] = s[right];
    s[right] = hold;
    left++;
    right--;
  }
  return s;
};
console.log(reverseString2Pointer(["h", "e", "l", "l", "o"]))
