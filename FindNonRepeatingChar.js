let string = "the quick brown fox jumps then quickly blow air";

function FirstNonRepeatingChar(string) {
  let char = undefined;
  let nonRepeatedChar = [];
  const charObj = {};
  for (let index = 0; index < string.length; index++) {
    char = string[index];
    if (char != " ") {
      charObj[char] = (charObj[char] || 0) + 1;
    }
  }

  for (const keys in charObj) {
    if (charObj[keys] == 1) {
      nonRepeatedChar.push(keys);
    }
  }

  return nonRepeatedChar;
}

console.log(FirstNonRepeatingChar(string));
