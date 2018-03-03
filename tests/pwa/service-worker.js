module.exports = {
  name: 'Service Worker',
  url: 'https://www.w3.org/TR/service-workers/',
  test: function (done, caveats) {
    try {
      done('serviceWorker' in navigator);
    } catch(o_O) {
      done(false);
    }
  }
};