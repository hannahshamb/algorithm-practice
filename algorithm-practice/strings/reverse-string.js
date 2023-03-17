/*
Write a function that reverses a string.
The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.


Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/* APPROACH 1: Copy Array & Loop
1. Create a copy of the string array using the slice method and saving value to
a new variable (copyArray)
2. Create a reverse variable and assign it the value of the last index of
the string array '
3. Loop through the string array, initializing i at zero, checking if i is less
than the length of the string array and incrementing i at each loop
4. In the loop, assign the value of copyArray at the reverse variable index to
the current value of the string array
5. Decrement the reverse variable (each time we are reading backwards through
  the copyArray which values do not change)
6. Return the string array outside of the loop
*/

var reverseString = function (s) {
  let copyArray = s.slice();
  console.log('copyArray', copyArray)
  let reverse = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    console.log('s', s);
    console.log('current value', s[i])
    console.log('copied array value', copyArray[reverse], 'reverse', reverse);
    s[i] = copyArray[reverse];
    reverse--
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]))


// 2 pointer approach
// create two pointers
// left pointer starting at index 0
// right pointer starting at index s.length minus 1 (last element of the string)
// create a while loop checking if left is still less than right
// create a hold variable to hold the string at left index value
// assign the string at left index to the value of the string at the right index
// assign the right index to the value of the hold (original left value)
// - essentially swapping right and left values -
// Increment the left value
// Decrement the right value
// while loop will end when the left and right pointers become equal (if relevant)

/*APPROACH 2: 2 Pointers
1. Create a left pointer variable and initialize it to zero
2. Create a right pointer variable and initialize it to the last index of
the string array (s)
3. Create a while loop that checks if left is less than right
4. Create a hold variable and assign it to the value of the string array at
the left variable index (0 the first time)
5. Take the string array at left variable index and swap its value with
the string array at the right variable index (swapping the left value to equal the right value)
6. Change the string array at the right value and swap it for the HOLD variable
(CANNOT use s at the right variable index because you already changed it to the
  value of s at the right index)
7. Increment the left variable
8. Decrement the right variable
9. Return the string array (s)
Note: the reason the while loop will quit out is that the left variable will
eventually become greater than the right variable (and enter territory that has
already been handled/swapped)
*/

var reverseString2Pointer = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const hold = s[left];
    s[left] = s[right];
    s[right] = hold;
    left++;
    right--;
  }
  return s;
};

//TEST 1
// input: ["h", "e", "l", "l", "o"]
// expected output:  ["o", "l", "l", "e", "h"]
console.log(reverseString2Pointer(["h", "e", "l", "l", "o"]))


/*APPROACH 3: Reverse method
1. Return the value of calling the reverse method on the string array which will
reverse the array in place where the last element of the array becomes the first,
the first element of the array becomes the last, all elements in the array will
reverse directions
*/

var reverseStringReverseMethod = function (s) {
  return s.reverse();
};
//TEST 1
// input: ["h", "e", "l", "l", "o"]
// expected output:  ["o", "l", "l", "e", "h"]
console.log(reverseString2Pointer(["h", "e", "l", "l", "o"]))
