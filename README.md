# 🧩 Algorithm Practice Assignment

This project involves understanding the process of creating algorithms and gaining skills in implementing them using JavaScript. It includes various exercises to help you think algorithmically, plan solutions, and practice testing your code.

## Goal

Understand the process of creating an algorithm and gain skills in implementing algorithms using JavaScript.

## Skills

- Start thinking algorithmically.
- Learn how to plan the solutions to programming tasks in advance.
- Practice solving tasks that require algorithmic thinking.
- Start testing your code.

## Exercise

### 1. Sorting Algorithm

Given a list of numbers, `[100, 95, 10, -10, 32, -55, 44, 10, 33, -564]`, sort them using an insertion sort and a selection sort. The output should be a sorted array. You must create two separate functions for each sorting algorithm.

#### Test your code

- An empty array (should return an empty array).
- An array with just one element.
- An already sorted array.
- An array sorted in a reverse manner.

### 2. From Google

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return `true` since `10 + 7` is `17`.

**Bonus:** Can you do this in one pass?

#### Test your code

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

- The string `"()"`, which should return `true`.
- The string `"{[()]}"`, which should return `true`.
- The string `"{[()]"`, which should return `false`.
- The string `"{[()]}}"`, which should return `false`.
- The string `"{[()]"`, which should return `false`.

## Requirements

- JavaScript (Node.js)

## Installation

Clone the repository and navigate to the folder.

```bash
git clone <repository-url>
cd <repository-folder>
```

## Usage

To run the JavaScript implementation of an algorithm:

```bash
node <javascript-file>.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Suggested future improvements

- Add more algorithmic exercises.
- Improve test cases for more robust testing.
