"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: 'ZRDataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'primary',
      size: 'size-large',
      className: 'primary'
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "loader-loading",
      "data-loader": this.props.loader
    }), !!this.props.title && /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, this.props.title));
  }
});