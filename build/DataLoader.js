"use strict";

var React = require('react');

module.exports = znui.react.createClass({
  displayName: 'DataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      content: 'Loading...',
      className: ''
    };
  },
  render: function render() {
    return React.createElement("div", {
      style: this.props.style,
      className: 'znui-react-data-loader ' + this.props.className
    }, React.createElement("div", {
      className: "loader",
      "data-loader": this.props.loader
    }), React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});