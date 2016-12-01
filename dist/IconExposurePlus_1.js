const React = require('react')

const icons = {
  "24": require('./IconExposurePlus_124.js'),
  "48": require('./IconExposurePlus_148.js'),
}

module.exports = function IconExposurePlus_1 (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}
