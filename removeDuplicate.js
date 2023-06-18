function removeDuplicate(array) {
  const removerArray = [];
  const exists = {};
  let element = undefined;
  for (let index = 0; index < array.length - 1; index++) {
    element = array[index];
    if (!exists[element]) {
      removerArray.push(element);
      exists[element] = true;
    }
  }

  console.log(exists);

  return removerArray;
}

let array = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
// console.log(removeDuplicate(array));

/**
 * Second method using filter
 */

let array2 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const filteredArray = array2.filter((item, index) => {
  if (array2.indexOf(item) == index) {
    return item;
  }
});

// console.log("filteredArray", filteredArray);

/**
 * Using DSA Set method
 */

let array3 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const setArray = [...new Set(array3)];
// console.log("setArray", setArray);

/**
 * Find the count of number
 */
let array4 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
function findCountOfArraysNums(array3) {
  const Obj = {};
  array3.forEach((element) => {
    Obj[element] = (Obj[element] || 0) + 1;
  });
  return Obj;
}

console.log(findCountOfArraysNums(array4));
