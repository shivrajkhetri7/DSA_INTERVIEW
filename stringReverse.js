/**
 * Question: How would you reverse a string in JavaScript?
 */

/**
 * Q - > 'you are a nice dude';
 * output - > "edud ecin a era uoy"
 */

let string = "you are a nice dude";

function stringReverse(string) {
  return string.split("").reverse().join("");
}

console.log(stringReverse(string));

/**
 * DSA string reverse
 */

function stringRev(string) {
  let reverseString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reverseString += string[index];
  }
  return reverseString;
}

console.log(stringRev(string));
