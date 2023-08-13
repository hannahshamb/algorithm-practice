//TWO SUM//

/* Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order. */

function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        result.push(i, j);
        return result;
      }
    }
  }
}

function twoSum2(nums, target) {
  const numIndicesMap = {}; // Create an empty object to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement needed to reach the target

    if (complement in numIndicesMap) {
      // If the complement is found in the map, return the current index and the stored index
      return [numIndicesMap[complement], i];
    }

    // Store the current number and its index in the map
    numIndicesMap[nums[i]] = i;
  }

  // If no solution is found, return an empty array or some other indicator
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum2(nums, target);
console.log(result); // Output: [0, 1]

console.log('twoSum([2, 7, 11, 15], 9)', twoSum2([2, 7, 11, 15], 9));
console.log('twoSum([3, 2, 4], 6)', twoSum2([3, 2, 4], 6));
console.log('twoSum([3, 3], 6)', twoSum2([3, 3], 6));
