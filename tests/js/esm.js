module.exports = {
  name: 'Modules',
  test: function (done, caveats) {
    done(typeof ESM === 'boolean' && ESM);
  }
};