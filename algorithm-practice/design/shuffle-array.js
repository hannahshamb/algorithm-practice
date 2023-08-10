/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums.slice();
  this.array = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.array = this.original.slice();
  return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const n = this.original.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    console.log('i', i, 'j', j)
    console.log('thisarray[i]', this.array[i], 'this.array[j]', this.array[j])

  }
  return this.array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
