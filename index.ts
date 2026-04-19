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

// 3.Largest Number in an Array
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
const checkPalindrome = (s: string): boolean => {
  const cleaned: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed: string = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

// console.log(checkPalindrome("racecar"));

// 5. Sum of Array Elements
 

const sumOfArray = (input: number[]) => {
  let total = 0;
  for (let index = 0; index < input.length; index++) {
    total += input[index];
  }
  console.log(total);
};

sumOfArray([]);
