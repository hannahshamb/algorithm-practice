var hammingWeight = function (n) {
  let count = 0;

  while (n!== 0) {
    let isOne = n & 1;
    if (isOne === 1) {
      count++
    }
    n = n >>> 1;
  }

  return count;

};

const n = 11111111111111111111111111111101;
console.log(hammingWeight(n));


var hammingWeight2 = function (n) {
  let count = 0;
  let arr = n.toString(2);
  console.log(arr);
  for (let x of arr) {
    if (x === '1') {
      count++;
    }
  }
  return count;
}

console.log(hammingWeight2(n));
