/* eslint no-undef:"off" */

require('dotenv').config();

const { range } = require('../index.js');

// #region jasmine setup
const origTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

const revertJasmineTimeout = function revertJasmineTimeout() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = origTimeout;
};

const setJasmineTimeout = function setJasmineTimeout(milliseconds) {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = milliseconds;
};

// you can set more options than are shown here: see https://jasmine.github.io/api/edge/Reporter.html
// tutorial: https://jasmine.github.io/tutorials/custom_reporter
const myReporter = {
  jasmineStarted: function jasmineStarted(suiteInfo, done) {
    // optional setup goes here
    setJasmineTimeout(10000);
    done();
  },
  jasmineDone: function jasmineDone(suiteInfo, done) {
    console.log(`Tests ended ${new Date().toLocaleString()}`);
    revertJasmineTimeout();
    done();
  }
};

jasmine.getEnv().addReporter(myReporter);
// #endregion jasmine setup

describe('range', () => {
  it('throws on bad data', () => {
    expect(() => { range(); }).toThrow();
    // too few arguments
    expect(() => { range(1); }).toThrow();
    // bad arguments
    expect(() => { range(1, 'not a number'); }).toThrow();
    expect(() => { range('not a number', 13); }).toThrow();
  });

  it('returns an array of numbers', () => {
    const result = range(1, 3);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((el) => typeof el === 'number')).toBe(true);
  });

  it('handles the same start and end number', () => {
    expect(range(42, 42)).toEqual([42]);
  });

  it('handles ascending numbers', () => {
    expect(range(0, 12)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  it('handles descending numbers', () => {
    expect(range(10, 2)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2]);
    expect(range(1, -2)).toEqual([1, 0, -1, -2]);
  });
});
