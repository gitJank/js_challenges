const chalk = require("chalk");
const coolTests = require("./helpers/coolTests");
const challenges = require("./challenges");

let results = [];

results.push(
  coolTests.test(challenges.FirstFactorial, "(4 * 3 * 2 * 1) = 24", 4)
);

results.push(
  coolTests.test(
    challenges.FirstReverse,
    "sredoC dna dlroW olleH",
    "Hello World and Coders"
  )
);

results.push(
  coolTests.test(
    challenges.LongestWord,
    "things",
    "This is a test things string!"
  )
);

results.push(
  coolTests.test(
    challenges.LengthOfLongestWord,
    6,
    "This is a test things string!"
  )
);

const formatResult = results => {
  const failedCount = results.filter(result => {
    return !result;
  }).length;

  return failedCount > 0
    ? chalk.bgRed(`${failedCount} - failed`)
    : chalk.bgGreen("All Tests Passed");
};

console.log(formatResult(results));
