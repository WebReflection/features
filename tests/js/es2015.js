"use strict";

var tests = [
  function objects(caveats) {
    try {
      if (!eval('({Y(){return true},get ["OK"](){return this.Y()}}).OK===true')) {
        throw new Error('caveat');
      }
    } catch(o_O) {
      if (o_O.message === 'caveat')
        caveats.push('no object literals');
      else
        throw o_O;
    }
  },
  function forOf(caveats) {
    eval('for (const v of [1,2,3]) {}');
  },
  function templateLiterals(caveats) {
    function tag(tpl) { return tpl; };
    var same = eval('tag`1${2}3` === tag`1${0}3`');
    if (!same) caveats.push('not same template array');
  },
  function destructuring(caveats) {
    eval('const [a, b] = [1, 2]; if(a !== 1 || b !== 2) throw new Error;');
  },
  function classes(caveats) {
    eval([
      'class List extends Array {}',
      'if(false === new List instanceof Array) throw new Error'
    ].join('\n'));
  },
  function spread(caveats) {
    if (eval('"".concat(...["a", "b", "c"])') !== 'abc')
     throw new Error;
  },
  function symbols(caveats) {
    if (!(Symbol.iterator in String.prototype)) {
      caveats.push('no Symbol.iterator');
    }
  },
  function strings(caveats) {
    if (!(
      ''.startsWith &&
      ''.endsWith &&
      ''.repeat &&
      ''.codePointAt &&
      ''.includes &&
      ''.normalize
    )) {
      caveats.push('not all String');
    }
  },
  function arrays(caveats) {
    if (!(
      Array.from &&
      [].copyWithin &&
      [].find &&
      [].findIndex &&
      [].fill &&
      [].keys &&
      [].entries
    )) {
      throw new Error;
    }
    if (![].values) caveats.push('no [].values()');
  },
  function numbers(caveats) {
    if (!(
      Number.isFinite &&
      Number.isInteger &&
      Number.isSafeInteger &&
      Number.isNaN &&
      Number.parseFloat &&
      Number.parseInt &&
      Number.EPSILON &&
      Number.MIN_SAFE_INTEGER &&
      Number.MAX_SAFE_INTEGER
    )) {
      caveats.push('not all Number');
    }
  },
  function math(caveats) {
    if (!(
      Math.clz32 &&
      Math.imul &&
      Math.sign &&
      Math.log10 &&
      Math.log2 &&
      Math.log1p &&
      Math.expm1 &&
      Math.cosh &&
      Math.sinh &&
      Math.tanh &&
      Math.acosh &&
      Math.asinh &&
      Math.atanh &&
      Math.trunc &&
      Math.fround &&
      Math.cbrt &&
      Math.hypot
    )) {
      caveats.push('not all Math');
    }
  },
  function misc() {
    if (!(
      WeakMap &&
      WeakSet &&
      Map &&
      Set &&
      Promise
    )) {
      throw new Error;
    }
  },
  function proxy(caveats) {
    var object = {};
    if (
      new Proxy(object, {get: function (target, key) {
        return target === object && key === 'test' && 123;
      }}).test !== 123
    ) {
      throw new Error;
    }
  },
  function arrow(caveats) {
    if (!eval(
      '(function(){let a=arguments;return(()=>arguments==a&&this==Math)()}.call(Math))'
    )) throw new Error;
  },
  function tailCall(caveats) {
    function f(n) {
      return n <= 0 ? "OK" : f(n - 1);
    }
    try {
      if (f(1e6) !== "OK") throw new Error;
    } catch(o_0) {
      caveats.push('no tail calls');
    }
  },
  function defaultParameters(caveats) {
    try {
      if (!eval('(function(a="a"){return a}() === "a")')) {
        throw new Error('caveat');
      }
    } catch(o_O) {
      if (o_O.message === 'caveat')
        caveats.push('no default parameters');
      else
        throw o_O;
    }
  },
  function restParameters(caveats) {
    try {
      if (!eval('(function(...a){return a.join("")}(1,2,3) === "123")')) {
        throw new Error('caveat');
      }
    } catch(o_O) {
      if (o_O.message === 'caveat')
        caveats.push('no rest parameters');
      else
        throw o_O;
    }
  }
];

module.exports = {
  name: 'ES2015',
  url: 'http://kangax.github.io/compat-table/es6/',
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