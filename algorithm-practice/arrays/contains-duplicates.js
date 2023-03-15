
/*
QUESTION:
Given an integer array nums, return true if any value
appears at least twice in the array, and return false if every element is distinct.
*/

/*
APPROACH:
1. Sort the array nums using the sort method
3. Loop through the nums array, initializing index i at 0, looping
while the condition if i is less than the length of nums minus 1 and
incrementing i at the end of each loop
4. Create an if statement that checks if the current value nums[i] is
equal to the next value nums[i+1]
5. If they are equal, return true
6. Outside of the for loop, return false in case there were no duplicates
*/

var containsDuplicates = (nums) => {
  nums.sort();
  //Checking if nums got sorted
  console.log('nums', nums);
  for (let i = 0; i < nums.length -1; i++) {
    if (nums[i] === nums[i+1]) {
      return true;
    }
  }
return false;
}

//TEST 1
console.log('[1,2,3,1] Test', containsDuplicates([1, 2, 3, 1]));
//TEST 2
console.log('[1,2,3,4] Test', containsDuplicates([1, 2, 3, 4]));
//TEST 3
console.log('[1,1,1,3,3,4,3,2,4,2] Test', containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));


/* DIFFERENT APPROACH - SET
1. Define a new Set
2. Loop through nums array, initializing index i at 0, checking while i is less than
the length of nums and incrementing i on each loop
3. Use the has method on the Set object to see if the set has nums at index i for each loop
- add an if statement to check that
4. If that is true, return true
5. For each iteration, add nums at index i to the set
6. Outside of the for loop, return false in case there were no duplicates
*/

var containsDuplicatesSet = function (nums) {
  const set = new Set();
  console.log('set', set);
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    console.log('set in loop', set, 'at i', i)
  }
  //Checking what is in the set to make sure it is what was expected if it's false
  console.log('set', set)
  return false;
};

//TEST 1
console.log('[1,2,3,1] Test', containsDuplicatesSet([1, 2, 3, 1]));
//TEST 2
console.log('[1,2,3,4] Test', containsDuplicatesSet([1, 2, 3, 4]));
//TEST 3
console.log('[1,1,1,3,3,4,3,2,4,2] Test', containsDuplicatesSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
