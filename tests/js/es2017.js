"use strict";

var tests = [
  function objectStatic(caveats) {
    if (!(
      Object.values &&
      Object.entries &&
      Object.getOwnPropertyDescriptors
    )) {
      throw new Error;
    }
  },
  function stringPadding(caveats) {
    if (!(
      ''.padStart &&
      ''.padEnd
    )) {
      throw new Error;
    }
  },
  function asynchronous() {
    eval('(async function () { return await Promise.resolve(1); })()');
  }
];

module.exports = {
  name: 'ES2017',
  url: 'http://kangax.github.io/compat-table/es2016plus/',
  test: function (done, caveats) {
    for (var i = 0; i < tests.length; i++) {
      try {
        tests[i](caveats);
      } catch(o_O) {
        return done(false);
      }
    }
    done(true);
  }
};