
/*
Given two strings needle and haystack, return the index of the
first occurrence of needle in haystack, or -1 if needle is not part of haystack.



Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.


Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/
var strStr = function (haystack, needle) {
  let index = -1;
  if (needle.length > haystack.length) {
    return index;
  }

  const jumpNum = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i+jumpNum) === needle) {
      index = i;
      break
    }
  }

  return index;
};

const haystack = 'sadbutsad';
const needle = 'sad';

console.log(strStr(haystack, needle));
