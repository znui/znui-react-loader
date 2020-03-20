"use strict";

var React = znui.React || require('react');

var Loader = require('./Loader');

module.exports = React.createClass({
  displayName: 'ZRLoading',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: 'Loading...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(Loader, this.props);
    }
  }
});