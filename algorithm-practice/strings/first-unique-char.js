/*
Given a string s, find the first non-repeating character in it and
return its index. If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

//APROACH: Hash Map

var firstUniqChar = function (s) {
  const map = {}

  for (let char of s) {
    map[char] = (map[char] += 1) || 1
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1)  {
      return i
    }
  }
  return -1
};



console.log('FIRST TEST "leetcode"', firstUniqChar("leetcode"));
console.log('SECOND TEST "loveleetcode"', firstUniqChar("loveleetcode"));
console.log('THIRD TEST "aabb"', firstUniqChar("aabb"));
