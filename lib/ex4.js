/**
 * 1. Define `pickNumbers(..)` so that it's a pure function (other than the randomness!) which generates a
 * new random lottery number (using `lotteryNum()`) and adds it to the list.
 * 2. `pickNumbers(..)` should always keep the list of lottery numbers sorted in ascending order. Also,
 * no duplicates!
 */

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(luckyLotteryNumbers) {
  const nextNumber = lotteryNum();
  const currentNumbers = new Set(luckyLotteryNumbers);
  return !currentNumbers.has(nextNumber) ? nextNumber : pickNumber([...currentNumbers]);
}

const luckyLotteryNumbers = [];
function pickNumbers() {
  return Array.from(Array(6))
    .map(() => pickNumber(luckyLotteryNumbers))
    .sort((a, b) => a - b);
}

module.exports = { luckyLotteryNumbers, pickNumbers };
