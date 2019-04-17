const chalk = require("chalk");

exports.test = (callback, expected, arg) => {
  const actual = callback(arg);
  const funcName = callback.name;

  if (expected === actual) {
    console.log(`${funcName} - ${chalk.green("Passed")}`);
    return true;
  }
  console.log(
    `${funcName} - ${chalk.red(
      "Failed"
    )} \n -expected: ${expected} \n +actual: ${actual}`
  );
  return false;
};
