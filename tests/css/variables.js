module.exports = {
  name: 'Variables',
  test: function (done, caveats) {
    try {
      var readable = getComputedStyle(document.body, null).getPropertyValue('--variable') == 100;
      done(readable);
      if (!readable) return;
      try {
        document.body.style.setProperty('--variable', 200);
        if (getComputedStyle(document.body, null).getPropertyValue('--variable') != 200) {
          caveats.push('non writable');
        }
      } catch(o_O) {
        caveats.push('no .setProperty(...)');
      }
    } catch (o_O) {
      done(false);
    }
  }
};