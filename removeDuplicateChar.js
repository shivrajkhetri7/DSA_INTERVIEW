const string = "Learn more javascript dude";

function removeDuplicateChar(string) {
  let char = undefined;
  let charObject = {};
  let uniqueKeys = [];
  for (let index = 0; index < string.length; index++) {
    char = string[index];
    if (char != "") {
      charObject[char] = (charObject[char] || 0) + 1;
    }
  }

  for (const keys in charObject) {
    if (charObject[keys] == 1) {
      uniqueKeys.push(keys);
    }
  }
  return uniqueKeys.join("");
}

console.log(removeDuplicateChar(string));
