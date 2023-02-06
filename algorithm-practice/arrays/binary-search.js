/* Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function (nums, target) {
let left = 0,
    right = nums.length -1;
    while (left <= right) {
      let middle = left + Math.floor((right -left)/2);
      console.log('middle', middle)
      if (nums[middle] === target) {
        return middle;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
console.log('search(nums, 9)', search(nums, 9))
console.log('search(nums, 2)', search(nums, 2))
console.log('search(nums, 0)', search(nums, 0))
