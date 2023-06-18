function greatestCommonDivisor(a, b) {
  let divider = 2;
  let maxDivider = 1;

  if (a < divider && b < divider) return 1;

  while (a >= divider && b >= divider) {
    if (a % divider == 0 && b % divider == 0) {
      maxDivider = divider;
    }
    divider++;
  }
  return maxDivider;
}

console.log(greatestCommonDivisor(14, 21));

/**
 * Fancy algorithm
 */

function greatestCommonDivisor1(a, b) {
  if (b == 0) return a;
  else return greatestCommonDivisor(b, a % b);
}

console.log(greatestCommonDivisor1(14, 21));
