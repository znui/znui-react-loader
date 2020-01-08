"use strict";

var React = require('react') || znui.React;
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
    return React.createElement("div", {
      className: znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size),
      style: this.props.style
    }, React.createElement("div", {
      className: "loader-loading",
      "data-loader": this.props.loader
    }));
  }
});