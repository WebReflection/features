module.exports = {
  name: 'Template Literals',
  test: function (done, caveats) {
    try {
      function tag(tpl) { return tpl; };
      var same = eval('tag`1${2}3` === tag`1${0}3`');
      if (!same) caveats.push('not same template array');
      done(true);
    } catch(o_O) {
      done(false);
    }
  }
};