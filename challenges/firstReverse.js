/*  Have the function FirstReverse(str) take the str parameter
    being passed and return the string in reversed order. For example:
    if the input string is "Hello World and Coders" then your program 
    should return the string sredoC dna dlroW olleH.  */

const coolTests = require("../helpers/coolTests");

const FirstReverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

module.exports = FirstReverse;
