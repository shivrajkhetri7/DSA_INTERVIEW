function mergeSortedArray(a, b) {
  const mergedArray = [];
  let i = 1;
  let j = 1;
  let aElement = a[0];
  let bElement = b[0];

  if (a.length == 0) return b;
  if (b.length == 0) return a;

  while (aElement || bElement) {
    if ((aElement && !bElement) || aElement < bElement) {
      mergedArray.push(aElement);
      aElement = a[i++];
    } else {
      mergedArray.push(bElement);
      bElement = b[j++];
    }
  }

  return mergedArray;
}

console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]));
