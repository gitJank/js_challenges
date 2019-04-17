/* Have the function LongestWord(sen) take the sen parameter being passed
 and return the largest word in the string. If there are two or more words
  that are the same length, return the first word from the string with that length.
   Ignore punctuation and assume sen will not be empty.  */

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

const arg = "This is a test things string!";

console.log("Longest Word:", LongestWord(arg));
console.log("Length of Longest Word:", LengthOfLongestWord(arg));
