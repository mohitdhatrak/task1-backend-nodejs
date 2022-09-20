// task 1 - Logic

/* You are given n words. Some words may repeat. For each word, find its number of occurrences. The output should contain the number of occurrences of each distinct word. See the sample input/output for clarification. */

const readlineSync = require("readline-sync");

console.log("Input Format: The first line of the input is n. The next n lines each contain a word. (Make sure you enter each word in a new line) \n");
console.log(
  `Sample Input:
4
bcdef
abcdefg
bcde
bcdef \n`);

const wordsArr = [];

// taking user input
const numOfWords = readlineSync.question("Enter your input: \n");
for (let i = 0; i < numOfWords; i++) {
  wordsArr[i] = readlineSync.question();
}

const wordsObj = {};

const isRepeating = (word) => {
  if (wordsObj[word] === undefined) {
    wordsObj[word] = 1;
  }
  else {
    wordsObj[word]++;
  }
}

wordsArr.forEach(word => isRepeating(word));

// array having number of repetitions of each unique word (order of words same as order of input words)
const numOfRepetitions = Object.values(wordsObj);

/* Output Format: On the first line, the output should be the number of distinct words from the input. On the second line, print the number of occurrences for each distinct word according to their appearance in the input. */
console.log("\nOutput:");
console.log(numOfRepetitions.length);
console.log(numOfRepetitions.join(" "));

// bonus task
/* Arrange each distinct word in the input according to their occurrences in descending order. Also, print the most repeated word and the least repeated word. */
console.log("\nBonus Output:");
const uniqueWords = Object.keys(wordsObj);
const descendingOrder = [...uniqueWords.sort((a, b) => wordsObj[b] - wordsObj[a])];

console.log(`\nUnique words in descending order of occurrences: \n${descendingOrder.join(", ")}`);

console.log(`\nMost repeated word: ${descendingOrder[0]}`);
console.log(`Least repeated word: ${descendingOrder[uniqueWords.length - 1]}`);