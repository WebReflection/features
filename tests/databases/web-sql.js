module.exports = {
  name: 'Web SQL',
  test: function (done, caveats) {
    done(typeof openDatabase === 'function');
  }
};