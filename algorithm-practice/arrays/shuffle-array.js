/*
Given an integer array nums, design an algorithm to randomly shuffle the array.
All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.


Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

1 <= nums.length <= 50
-106 <= nums[i] <= 106
All the elements of nums are unique.
At most 104 calls in total will be made to reset and shuffle.

*/


class Solution {
  constructor(nums) {
    this.original = nums.slice();
    this.array = nums.slice();
  }

  reset() {
    this.array = this.original.slice();
    return this.array;
  }

  shuffle() {
    const n = this.original.length;

    //loop starts at the end of the array and loops until the i = 1;
    for (let i = n - 1; i > 0; i--) {
      // j is a random index between 0 and i (inclusive)
      // i = 2, j = 2 or j = 1 or j = 0
      const j = Math.floor(Math.random() * (i + 1));

      // this.array[i] temp variable = this.array[j]
     // this.array[j] temp variable = this.array[i]
     //swapping the values of the two in the array
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      console.log('i', i, 'j', j)
      console.log('thisarray[i]', this.array[i], 'this.array[j]', this.array[j])

    }
    return this.array;
  }
}

// Test Case:
const nums = [1, 2, 3, 4,];
const solution = new Solution(nums);
console.log('solution.shuffle(), nums = [1, 2, 3]', solution.shuffle());
// console.log('solution.reset(), nums = [1, 2, 3]', solution.reset());
// console.log('solution.shuffle(), nums = [1, 2, 3]', solution.shuffle());


/*
  array = [1, 2, 3, 4, 5]
  i = 2
  j = 0
temp1 (this.array[i]) = this.array[j]
temp2 (this.array[j]) = this.array[i]
array[2] (3) = array[0] (1)
3 = 1
array[0] (1) = array[2] (1)
1 = 3
[3, 2, 1, 4, 5]
*/
