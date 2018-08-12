/* eslint-disable */
/**
 * Instructions
 * 1. Make a pure function `bar(..)` to wrap around `foo(..)`.
 * 2. Make a pure function `bar(..)` that "adapts" `foo(..)` to avoid its side effects.
 */

function wrapped(x, y) {
  function foo(x) {
    y++;
    z = x * y;
  }
  let z;
  foo(20);
  return [y, z];
}

function foo(x) {
  y++;
  z = x * y;
}
let y;
let z;

function adapted(currX, currY) {
  const [origY, origZ] = [y, z];
  y = currY;
  foo(currX);
  const [newY, newZ] = [y, z];
  [y, z] = [origY, origZ];
  return [newY, newZ];
}

module.exports = { wrapped, adapted };
