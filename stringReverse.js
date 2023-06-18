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

/**
 * String reverse
 * @Query -> For example "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
 */

const string2 = "Welcome to this Javascript Guide!";

function reverseString(string2) {
  return string2.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseString(string2));

function reverseWords(string2) {
  const reverseData = [];
  function reverseParam(word) {
    let reverseWord = "";
    for (let index = word.length - 1; index >= 0; index--) {
      reverseWord += word[index];
    }
    return reverseWord;
  }
  const stringArray = string2.split(" ");
  for (let index = 0; index < stringArray.length; index++) {
    let word = reverseParam(stringArray[index]);
    reverseData.push(word);
  }
  return reverseData.join(" ");
}

console.log("----> ", reverseWords(string2));
