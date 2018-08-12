const { pickNumbers, luckyLotteryNumbers } = require('../lib/ex4');

test('generates 6 unique lottery numbers', () => {
  const numbers = pickNumbers();
  expect(numbers).toBeInstanceOf(Array);
  expect(numbers.length).toBe(6);
});

test('does not mutate `luckyLotteryNumbers`', () => {
  pickNumbers();
  expect(luckyLotteryNumbers).toEqual([]);
});
