function primeNumber(num) {
  if (num == 1) {
    return false;
  }

  for (let index = 2; index < Math.sqrt(num); index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

let num = 3;
console.log(primeNumber(num));
