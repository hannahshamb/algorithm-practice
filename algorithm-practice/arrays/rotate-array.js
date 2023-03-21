/*
Given an integer array nums, rotate the array to the right by k steps,
where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

/*
APPROACH 1: Pop & Unshift
1. Create a while loop that checks if k is greater than 0
2. Create a variable called currentValue and assign the value of the pop method
being called on the nums array to it (the last element of the array while taking it off)
3. Call the unshift method on the nums array and pass the currentValue into it as the arguement
(taking the last element in the array and putting it to the top)
4. Decrement k
*/
var rotate = function (nums, k) {
  while (k > 0) {
    const currentValue = nums.pop();
    nums.unshift(currentValue);
    k--
  }
return nums;
};

console.log('Test 1: rotate([1, 2, 3, 4, 5, 6, 7], 3)', rotate([1, 2, 3, 4, 5, 6, 7], 3))
