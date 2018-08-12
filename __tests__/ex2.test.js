const { printIf, isShortEnough, isLongEnough } = require('../lib/ex2');

const msg1 = 'hello';
const msg2 = `${msg1} world`;

describe('isShortEnough predicate', () => {
  test('calling printIf with "hello" logs out this message', () => {
    const output = printIf(isShortEnough)(msg1);
    expect(output).toBe('hello');
  });

  test('calling printIf with "world" logs out this message', () => {
    const output = printIf(isShortEnough)(msg2);
    expect(output).toBeFalsy();
  });
});

describe('isLongEnough predicate', () => {
  test('calling printIf with "hello" does not log', () => {
    const output = printIf(isLongEnough)(msg1);
    expect(output).toBeFalsy();
  });

  test('calling printIf with "hello world" does log', () => {
    const output = printIf(isLongEnough)(msg2);
    expect(output).toBe('hello world');
  });
});
