module.exports = {
  name: 'Database / Storage',
  tests: [
    require('./indexeddb'),
    require('./web-sql')
  ]
};