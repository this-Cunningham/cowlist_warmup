const { Cow } = require('./index.js');

module.exports.getCows = () => {
  return Cow.find()
}