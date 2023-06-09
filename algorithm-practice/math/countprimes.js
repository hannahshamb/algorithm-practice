/*
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Input: n = 0
Output: 0

Input: n = 1
Output: 0
*/

var countPrimes = function (n) {
  const array = [];
  const isPrime = num => {
    for(let i = 0; i < array.length && array[i] <= Math.sqrt(num); i++) {
      if (num % array[i] === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  return array.length;
};

console.log('countPrimes(10)', countPrimes(10));
console.log('countPrimes(0)', countPrimes(0));
console.log('countPrimes(1)', countPrimes(1));
console.log('countPrimes(25)', countPrimes(25));
