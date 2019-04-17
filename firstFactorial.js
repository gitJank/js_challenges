/* Have the function FirstFactorial(num) take the num parameter being passed
   and return the factorial of it. For example: if num = 4, then your program
   should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be
   between 1 and 18 and the input will always be an integer.  */

const FirstFactorial = num => {
  let expression = "";

  for (let i = num; i > 0; i--) {
    expression += i !== 1 ? `${i} * ` : i;
  }

  return `(${expression}) = ${eval(expression)}`;
  //eval is cool
};

console.log(FirstFactorial(4));
