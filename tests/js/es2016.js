"use strict";

var tests = [
  function exponentialOperator(caveats) {
    if(!eval('3**2===9')) throw new Error;
  },
  function arrayIncludes(caveats) {
    if (![].includes) throw new Error;
  }
];

module.exports = {
  name: 'ES2016',
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