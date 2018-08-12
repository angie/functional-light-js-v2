const not = fn => (...args) => !fn(...args);

const when = fn => predicate => (...args) => predicate(...args) && fn(...args);

const output = text => text;

const printIf = when(output);

const isShortEnough = str => str.length <= 5;

const isLongEnough = not(isShortEnough);

module.exports = { printIf, isShortEnough, isLongEnough, output };
