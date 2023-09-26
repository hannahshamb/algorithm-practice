/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  // Start with the first string as the initial common prefix
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentString = strs[i];
    let j = 0;

    // Compare characters of the current string with the common prefix
    while (j < commonPrefix.length && j < currentString.length && commonPrefix[j] === currentString[j]) {
      j++;
    }

    // Update the common prefix to match the shared characters
    commonPrefix = commonPrefix.slice(0, j);

    // If the common prefix becomes empty, there's no need to continue
    if (commonPrefix === "") {
      break;
    }
  }

  return commonPrefix;
};


// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""
