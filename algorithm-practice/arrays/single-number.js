/*
Given a non-empty array of integers nums,
every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and
use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1
*/


//APPROACH 1: sort & Compare
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

 const sorted = nums.sort();
//  console.log('sorted', sorted)
 for (let i = 0; i < sorted.length; i++) {
  if (i % 2 === 0) {
    // console.log('i', i, 'sorted[i]', sorted[i])
    if (sorted[i] !== sorted[i+1]) {
      return sorted[i]
    }
  }
 }

};

console.log('Test1 singleNumber([2, 2, 1])', singleNumber([2, 2, 1]))
console.log('Test2 singleNumber([4, 1, 2, 1, 2])', singleNumber([4, 1, 2, 1, 2]))
console.log('Test3 singleNumber([1])', singleNumber([1]))
