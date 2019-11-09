/**
 * @description An inline way to make an array of integers.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {number[]} Array from start to end, inclusive.
*/
const range = function range(start, end) {
  if (typeof start !== 'number') {
    throw new Error('start must be a number');
  }

  if (typeof end !== 'number') {
    throw new Error('end must be a number');
  }

  if (start === end) {
    return [start];
  }

  const incrementOrDecrement = start < end ?
    (x) => x + 1 :
    (x) => x - 1;

  const isOutOfRange = start < end ?
    (x) => x > end :
    (x) => x < end;

  const makeArray = function makeArray(value, aggregator = []) {
    const current = incrementOrDecrement(value);

    if (isOutOfRange(current)) {
      return aggregator;
    }

    if (value === start) {
      aggregator.push(start);
    }

    aggregator.push(current);
    return makeArray(current, aggregator);
  };

  return makeArray(start);
};

module.exports = { range };
