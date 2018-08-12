const { wrapped, adapted } = require('../lib/ex1');

test('calling wrapped with 20 returns 120', () => {
  expect(wrapped(20, 5)).toEqual([6, 120]);
});

test('calling adapted with 20 returns 120', () => {
  expect(adapted(20, 5)).toEqual([6, 120]);
});
