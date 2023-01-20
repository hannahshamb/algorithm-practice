/*
Given a string s, find the length of the longest substring without repeating characters.

The substring() method returns the part of the string from the start index up to and excluding the end index,
or to the end of the string if no end index is supplied.

HASHMAP - essentially iterating using an object
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.

SET - Set objects are collections of values. A value in the Set may only occur once;
it is unique in the Set's collection. You can iterate through the elements of a set in insertion order.
The insertion order corresponds to the order in which each element was inserted into the set by
the add() method successfully (that is, there wasn't an identical element
already in the set when add() was called).

The Math.max() static method returns the largest of the numbers given as
input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 3, 2));
// Expected output: 3

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
the ... loops through and copies the array here

 */


var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let begin = 0;
  let map = {};
  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      begin = map[s[end]] + 1;
    }
    map[s[end]] = end;
    longest = Math.max(longest, end - begin + 1)
  }
  return longest;
}

console.log('lengthOfLongestSubstring("abcabcbb")', lengthOfLongestSubstring("abcabcbb"))
console.log('lengthOfLongestSubstring("abcabcbb")', lengthOfLongestSubstring("bbbbb"))
console.log('lengthOfLongestSubstring("abcabcbb")', lengthOfLongestSubstring("pwwkew"))
