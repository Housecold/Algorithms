# 🧩 Algorithm Practice Assignment

This project involves understanding the process of creating algorithms and gaining skills in implementing them using JavaScript. It includes various exercises to help you think algorithmically, plan solutions, and practice testing your code.

## Goal

Understand the process of creating an algorithm and gain skills in implementing algorithms using JavaScript.

## Skills

By doing this assignment, you will:
- Start thinking algorithmically.
- Learn how to plan the solutions to programming tasks in advance.
- Practice solving tasks that require algorithmic thinking.
- Start testing your code.

## Instructions

1. Create pseudocode for every algorithm. Only then proceed to implement the solution in JavaScript.
2. Use two files: one for pseudocode solutions and one for JavaScript implementations. Submit the files containing solutions for every problem. The JavaScript file must contain functions that return values.
3. You must complete the first four exercises. The fifth is optional, but we recommend that you consider a possible pseudocode solution for it.
4. Test your code with all the edge cases you might think of. When you are out of ideas, check the toggle list below each exercise and test some ideas.
5. Refer to MDN for JavaScript syntax and methods.

## Exercises

### 1. Sorting Algorithm

Given a list of numbers, `[100, 95, 10, -10, 32, -55, 44, 10, 33, -564]`, sort them using an insertion sort and a selection sort. The output should be a sorted array. You must create two separate functions for each sorting algorithm.

#### Test your code

Test both your functions by passing arrays that represent edge cases as arguments and see if they work just the same with each one. Test your functions against:
- An empty array (should return an empty array).
- An array with just one element.
- An already sorted array.
- An array sorted in a reverse manner.

### 2. From Google

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return `true` since `10 + 7` is `17`.

**Bonus:** Can you do this in one pass?

#### Test your code

Test your functions by passing arrays and numbers representing edge cases as arguments. See if your function works with every case just as it did with the previous case. Test your functions against:
- An empty array and any number as `k`, like `([], 10)`, which should return `false`.
- An array with just one element with the exact number as `k`, like `([5], 5)`, which should return `false`.
- An array with negative values and a negative `k`, like `([-5, 2, -8, 6], -3)`, which should return `true`.
- An array with floating-point numbers and a floating-point `k`, like `([1.5, 2.5, 3.5], 4)`, which should return `true`.
- An array that has duplicated numbers and `k` is the sum of both, like `([4, 6, 4, 2], 8)`, which should return `true`.
- An array where all elements sum up to the value of `k`, like `([1, 2, 3, 4], 10)`, which should return `false`.

### 3. From Amazon

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string `"AAAABBBCCDAA"` would be encoded as `"4A3B2C1D2A"`.

Implement run-length encoding and decoding. You can assume the string to be encoded has no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

#### Test your code

Test your functions by passing a string that represents edge cases as an argument. See if they work just the same in every case. Test them against:
- An empty string, which should return an empty string.
- A string with a single character, that should return just `1<character>`.
- A string with non-consecutive repeating characters, like `"acbcba"`, which should return `1a1c1b1c1b1a`.
- A string with special characters, like `"@##$$%"`, which should return `1@2#2$1%`.
- A string with spaces, like `"aa bbbcc"`, which should return `2a3 3b2c`.
- A string with uppercase and lowercase characters, like `"aAaBBb"`, which should return `1a1A1a2B1b`.

Try decoding the strings you see in the examples above and check if the result of the decoding process returns the original string.

### 4. From Facebook

Given a string of round, curly, and square open and closing brackets, return `true` if the brackets are balanced (well-formed).

For example:
- Given the string `"([])"`, return `true`.
- Given the string `"([)]"` or `"((()"`, return `false`.

#### Test your code

Test different cases, like:
- The string `"()"`, which should return `true`.
- The string `"{[()]}"`, which should return `true`.
- The string `"{[()]"`, which should return `false`.
- The string `"{[()]}}"`, which should return `false`.
- The string `"{[()]"`, which should return `false`.

## Submission

Submit two files:
1. `pseudocode_solutions.txt` containing pseudocode for each algorithm.
2. `javascript_implementations.js` containing JavaScript functions that implement each algorithm.

Make sure your functions return values and are thoroughly tested with edge cases.

## Requirements

- JavaScript (Node.js)

## Installation

Clone the repository and navigate to the folder.

```bash
git clone <repository-url>
cd <repository-folder>
