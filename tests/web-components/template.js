module.exports = {
  name: 'HTML Template Elements',
  test: function (done, caveats) {
    try {
      var tpl = document.createElement('template');
      tpl.innerHTML = '<td></td>';
      done(/^td$/i.test(tpl.content.firstChild.nodeName));
    } catch(o_O) {
      done(false);
    }
  }
};