require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var loader = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <loader.DataLoader loader="500px-spinner" />
        <loader.DataLoader loader="arrow-circle" />
        <loader.DataLoader loader="ball-auto" />
        <loader.DataLoader loader="ball-circle" />
        <loader.DataLoader loader="ball-fade" />
        <loader.DataLoader loader="ball-pulse" />
        <loader.DataLoader loader="ball-roll" />
        <loader.DataLoader loader="ball-rotate" />
        <loader.DataLoader loader="ball-scale" />
        <loader.DataLoader loader="circle-clock" />
        <loader.DataLoader loader="circle-scale" />
        <loader.DataLoader loader="circle-side" />
        <loader.DataLoader loader="circle" />
        <loader.DataLoader loader="heart" />
        <loader.DataLoader loader="jumping" />
        <loader.DataLoader loader="rectangle" />
        <loader.DataLoader loader="satellite" />
        <loader.DataLoader loader="spinner-circle" />
        <loader.DataLoader loader="spinner" />
        <loader.DataLoader loader="timer" />
        <loader.DataLoader loader="wave" />
        <loader.Loader loader="500px-spinner" />
        <loader.Loader loader="arrow-circle" />
        <loader.Loader loader="ball-auto" />
        <loader.Loader loader="ball-circle" />
        <loader.Loader loader="ball-fade" />
        <loader.Loader loader="ball-pulse" />
        <loader.Loader loader="ball-roll" />
        <loader.Loader loader="ball-rotate" />
        <loader.Loader loader="ball-scale" />
        <loader.Loader loader="circle-clock" />
        <loader.Loader loader="circle-scale" />
        <loader.Loader loader="circle-side" />
        <loader.Loader loader="circle" />
        <loader.Loader loader="heart" />
        <loader.Loader loader="jumping" />
        <loader.Loader loader="rectangle" />
        <loader.Loader loader="satellite" />
        <loader.Loader loader="spinner-circle" />
        <loader.Loader loader="spinner" />
        <loader.Loader loader="timer" />
        <loader.Loader loader="wave" />
    </div>
});