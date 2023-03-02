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
    console.log(reverse)
    s[i] = copyArray[reverse];
    reverse--
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]))
