const not = fn => (...args) => !fn(...args);

// first returns function that expects a predicate (e.g. isShortEnough)
// then returns function that expects args (e.g. "hello world")
// function when(fn) {
// 	return function(predicate){
// 		return function(...args){
// 			if (predicate(...args)) {
// 				return fn(...args);
// 			}
// 		};
// 	};
const when = fn => predicate => (...args) => predicate(...args) && fn(...args);

const output = text => text;

const printIf = when(output);

const isShortEnough = str => str.length <= 5;

const isLongEnough = not(isShortEnough);

module.exports = { printIf, isShortEnough, isLongEnough, output };
