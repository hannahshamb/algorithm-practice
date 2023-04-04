/*

Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays
and you may return the result in any order.


Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/

//APPROACH: HashMap
var intersect = function (nums1, nums2) {
  let obj = {};
  let result = [];
  let loopArray = nums2;
  let targetArray = nums1;

 if (nums2.length < nums1.length) {
    loopArray = nums2;
    targetArray = nums1;
  }

  for (let num of loopArray) {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
  }
  console.log('obj', obj)

  for (let num of targetArray) {
    if (obj[num] > 0) {
      result.push(num)
      obj[num]--
    }
    console.log('obj in loop', obj)
  }
  console.log('result', result)

  return result;
};


console.log('TEST 1 nums1 = [1,2,2,1], nums2 = [2,2]', intersect([1, 2, 2, 1], [2, 2]))
console.log('TEST 2 nums1 = [1,2,2,1], nums2 = [2,2]', intersect([2, 2], [1, 2, 2, 1]))
console.log('TEST 3 nums1 = [4,9,5], nums2 = [9,4,9,8,4]', intersect([4, 9, 5], [9, 4, 9, 8, 4]))

//APPROACH: Set

var intersect2 = function (nums1, nums2) {
  const unique = new Set(nums1);
  return [...unique].filter((item) =>  nums2.indexOf(item) !== -1);
};
console.log('TEST 1 nums1 = [1,2,2,1], nums2 = [2,2]', intersect2([1, 2, 2, 1], [2, 2]))
console.log('TEST 2 nums1 = [1,2,2,1], nums2 = [2,2]', intersect2([2, 2], [1, 2, 2, 1]))
console.log('TEST 3 nums1 = [4,9,5], nums2 = [9,4,9,8,4]', intersect2([4, 9, 5], [9, 4, 9, 8, 4]))
