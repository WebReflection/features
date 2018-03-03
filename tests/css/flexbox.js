module.exports = {
  name: 'Flexbox',
  test: function (done, caveats) {
    try {
      if ('flex-grow' in document.body.style) done(true);
      else if ('-ms-flex-positive' in document.body.style) done(!!caveats.push('with -ms prefix'));
      else if ('-webkit-flex-grow' in document.body.style) done(!!caveats.push('with -webkit prefix'));
      else if ('-moz-flex-grow' in document.body.style) done(!!caveats.push('with -moz prefix'));
      else throw new Error;
    } catch (o_O) {
      done(false);
    }
  }
};