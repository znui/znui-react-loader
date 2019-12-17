var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
require('../../znui-react/index.all.js');
znui.react.fixCreateReactClass(React, createClass);
var loader = require('../src/index.js');
require('./index.less');

ReactDOM.render(
    <div>
        <loader.DataLoader />
        <loader.DataLoader loader="wave" />
        <loader.DataLoader loader="spinner" />
        <loader.DataLoader loader="satellite" />
        <loader.DataLoader loader="jumping" />
        <loader.DataLoader loader="circle" />
    </div>,
    document.getElementById('container'),
);

