module.exports = {
  name: 'Permissions',
  url: 'https://www.w3.org/TR/permissions/#enumdef-permissionname',
  test: function (done, caveats) {
    try {
      if (navigator.permissions) {
        done(true);
        if (!navigator.permissions.request)
          caveats.push('no .request(...)');
      } else {
        throw new Error;
      }
    } catch(o_O) {
      done(false);
    }
  }
};