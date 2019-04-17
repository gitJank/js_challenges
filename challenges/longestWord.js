/* Have the function LongestWord(sen) take the sen parameter being passed
 and return the largest word in the string. If there are two or more words
  that are the same length, return the first word from the string with that length.
   Ignore punctuation and assume sen will not be empty.  */

const coolTests = require("../helpers/coolTests");

const LongestWord = sen => {
  return sen
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .reduce((prev, current) => {
      return prev.length >= current.length ? prev : current;
    });
};

// Extra Credit :)
const LengthOfLongestWord = sen => {
  return sen
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .reduce((prev, current) => {
      return Math.max(prev.length || prev, current.length);
    });
};

module.exports = { LengthOfLongestWord, LongestWord };
