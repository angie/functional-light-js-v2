const { f: compose, p: pipe } = require('../lib/ex3');

test('calling `compose(3)` returns 4', () => {
  expect(compose(3)).toBe(4);
});

test('calling `pipe(3)` returns 4', () => {
  expect(pipe(3)).toBe(4);
});

test('`pipe` and `compose` return the same value', () => {
  expect(compose(3)).toBe(pipe(3));
});
