module.exports = {
  name: 'Custom Elements V1',
  test: function (done, caveats) {
    var CE = typeof customElements === 'object';
    done(CE);
    if (CE) {
      try {
        customElements.whenDefined('shena-nigans').then(console.log);
      } catch(o_O) {
        caveats.push('no .whenDefined(...)');
      }
    }
  }
};