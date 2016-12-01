const React = require('react')

const icons = {
  "18": require('./IconBatteryFull18.js'),
  "24": require('./IconBatteryFull24.js'),
  "48": require('./IconBatteryFull48.js'),
}

module.exports = function IconBatteryFull (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

