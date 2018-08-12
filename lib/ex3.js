/**
 * 1. Define a `compose(..)` that takes any number of functions (as individual arguments) and composes them right-to-left.
 * 2. Define a `pipe(..)` that takes any number of functions (as individual arguments) and composes them left-to-right.
 */

function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

const pipe = (...fns) => input => fns.reduce((acc, curr) => curr(acc), input);
const compose = (...fns) => pipe(...fns.reverse());

const f = compose(
  decrement,
  double,
  increment,
  half,
);
const p = pipe(
  half,
  increment,
  double,
  decrement,
);

// f(3) === 4;
// true

// f(3) === p(3);
// true

module.exports = { f, p };
