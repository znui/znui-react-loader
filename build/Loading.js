"use strict";

var React = require('react') || znui.React;

var DataLoader = require('./DataLoader');

module.exports = znui.react.createClass({
  displayName: 'Loading',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: '加载中...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(DataLoader, this.props);
    }
  }
});