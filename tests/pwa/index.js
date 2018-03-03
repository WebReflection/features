module.exports = {
  name: 'PWA',
  tests: [
    require('./permissions'),
    require('./persistent-storage'),
    require('./service-worker')
  ]
};