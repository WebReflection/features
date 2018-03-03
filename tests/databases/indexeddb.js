module.exports = {
  name: 'IndexedDB',
  test: function (done, caveats) {
    done(typeof indexedDB === 'object');
  }
};