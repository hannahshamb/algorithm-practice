/*
 You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of money stashed, the only constraint stopping
 you from robbing each of them is that adjacent houses have security systems
 connected and it will automatically contact the police if two adjacent houses
 were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.


Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

* @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prevPrev = nums[0]; // Maximum money robbed from two houses ago
  let prev = Math.max(nums[0], nums[1]); // Maximum money robbed from the previous house

  for (let i = 2; i < n; i++) {
    const current = Math.max(prevPrev + nums[i], prev); // Calculate the maximum money for the current house
    prevPrev = prev; // Update the previous two houses
    prev = current; // Update the previous house
  }

  return prev; // The maximum money robbed considering all houses
};

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
