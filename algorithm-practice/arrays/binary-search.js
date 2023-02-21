/* Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.


1. Set a left pointer equal to the leftmost index (0)
2. Set a right pointer equal to the length of the nums array minus 1
3. Create a while loop that runs while left is less than or equal to right
4. Calculate the middle pointer by subtracting the left fro
5. Check if the nums loop at the middle index is equal to the target
6. If nums at middle index is equal to the target, return the middle
(found the index of the target)
7. Else if the nums at middle is less than the target, redefine left as middle plus 1
8. Otherwise (if the nums at middle is greater than the target), redefine left as middle minus 1
9. Return -1 at the end of the loop if the loop does not find the target

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
