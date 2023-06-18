/**
 * Question: How would you swap two numbers without using a temporary variable?
 */

function SwapNumber(a, b) {
  console.log("before swap", a, b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log("After Swap", a, b);
}

let a = 7;
let b = 9;
console.log(SwapNumber(a, b));
