const string = "SOS";

function checkPalindrome(string) {
  let result = true;
  let count = string.length - 1;

  if (string.length <= 2) {
    return (result = false);
  }

  for (let index = 0; index < string.length; index++) {
    if (count > index) {
      if (string[count] !== string[index]) {
        result = false;
        break;
      }
      count--;
    }
  }
  return result;
}

console.log(checkPalindrome(string));

/**
 *  using inbuilt function
 */

const string1 = "toyota";
const stringPalindrome = (string) => {
  let reverseStr = string.split("").reverse().join("");
  return string !== reverseStr ? false : true;
};

console.log(stringPalindrome(string1));
