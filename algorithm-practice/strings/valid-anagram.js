/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/
var isAnagram = function (s, t) {
  let anagram = true;
  if (s.length !== t.length) {
    return false;
  }
  let sCopy = s.split('').sort();
  let tCopy = t.split('').sort();

  for (let i = 0; i < sCopy.length; i++) {
    if (sCopy[i] !== tCopy[i]) {
      return false;
    }
  }
  return anagram;
}
console.log('isAnagram("anagram", "nagaram")', isAnagram('anagram', 'nagaram'));
console.log('isAnagram("rat", "car")', isAnagram('rat', 'car'));
