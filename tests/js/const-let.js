module.exports = {
  name: 'const / let',
  test: function (done, caveats) {
    try {
      Function('done', 'let a = 1; const b = 2; done(a === 1 && b === 2)')(done);
    } catch(o_O) {
      done(false);
    }
  }
};