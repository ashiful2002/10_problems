// 1. Reverse a String
const reverseString = (input: string) => {
  console.log(input.split("").reverse().join(""));
};

// reverseString("Bangladesh");

// 2. FizzBuzz
const fizzbuzzCalc = (input: number) => {
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzbuzzCalc(12);

// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.

// Input: int[] nums
// Output: integer
// Constraints: Array will have at least one element.
// Edge Case: Array with all negative numbers.
// Hint: Initialize a variable with the first element of the array.

const largestInArray = (input: number[]) => {
  let largest = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] > largest) {
      largest = input[i];
    }
  }
  console.log(largest);
};

// largestInArray([12, 23, 23, 4, 34, 3, 4]);

// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.

// Input: string s
// Output: boolean
// Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
// Edge Case: "racecar" (true) vs "hello" (false).
// Hint: Compare the string with its reverse.