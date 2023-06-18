function missingNumber(array) {
  let sum = 0;
  let len = array.length + 1;
  let expectedResult = (len * (len + 1)) / 2;

  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return expectedResult - sum;
}

// console.log(missingNumber([5, 2, 6, 1, 3]));

/**
 * Find the all the missing numbers from the array
 */

function findAllMissingNumberFromArray(array) {
  let maxNumber = 0;
  let minNumber = Infinity;
  let resultArray = [];

  for (let num of array) {
    if (minNumber > num) {
      minNumber = num;
    }
    if (maxNumber < num) {
      maxNumber = num;
    }
  }

  while (minNumber < maxNumber) {
    if (!array.includes(minNumber)) {
      resultArray.push(minNumber);
    }
    minNumber++;
  }
  return resultArray;
}

console.log(findAllMissingNumberFromArray([5, 2, 6, 1, 3]));
