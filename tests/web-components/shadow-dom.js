module.exports = {
  name: 'Shadow DOM',
  test: function (done, caveats) {
    try {
      done(!!document.body.attachShadow);
    } catch(o_O) {
      caveats.push('no document', 'no body');
      done(false);
    }
  }
};