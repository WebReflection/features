module.exports = {
  name: 'Grid',
  test: function (done, caveats) {
    try {
      done('grid-template-areas' in document.body.style);
    } catch (o_O) {
      done(false);
    }
  }
};