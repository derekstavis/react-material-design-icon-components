const React = require('react')

const icons = {
  "18": require('./IconApps18.js'),
  "24": require('./IconApps24.js'),
  "36": require('./IconApps36.js'),
  "48": require('./IconApps48.js'),
}

module.exports = function IconApps (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}
