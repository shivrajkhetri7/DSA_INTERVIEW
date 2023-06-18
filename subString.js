function findSubstrings(string, sub_string) {
  const indices = [];
  let index = string.indexOf(sub_string);

  while (index !== -1) {
    indices.push(index);
    index = string.indexOf(sub_string, index + 1);
  }

  return indices;
}

const string = "abbcdabbbbbck";
const sub_string = "ab";

console.log(findSubstrings(string, sub_string));
