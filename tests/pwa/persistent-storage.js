module.exports = {
  name: 'Persistent Storage',
  url: 'https://storage.spec.whatwg.org/#persistence',
  test: function (done, caveats) {
    try {
      done(!!navigator.storage.persist);
    } catch(o_O) {
      done(false);
    }
  }
};