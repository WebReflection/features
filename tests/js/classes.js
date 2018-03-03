module.exports = {
  name: 'Classes',
  test: function (done, caveats) {
    try {
      eval('class List extends Array {}\ndone(new List instanceof Array)');
    } catch(o_O) {
      done(false);
    }
  }
};