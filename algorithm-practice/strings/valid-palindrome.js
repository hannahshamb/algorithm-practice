/* A phrase is a palindrome if, after converting all uppercase letters
into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/


var isPalindrome = function (s) {
  const lowercase = s.toLowerCase();
  const replaced = lowercase.replace(/[^a-zA-Z0-9]/g, '');
  let backwards = '';
  let palindrome = false;

  for (let i = replaced.length - 1; i >= 0; i--) {
    backwards += replaced[i];
  }
  if (replaced === backwards) {
    palindrome = true;
  }
  return palindrome;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
