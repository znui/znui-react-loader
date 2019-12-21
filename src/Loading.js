var React = require('react') || znui.React;
var DataLoader = require('./DataLoader');
module.exports = znui.react.createClass({
	displayName:'Loading',
	getDefaultProps: function (){
		return {
			data: null,
			loader: 'timer',
			content: '加载中...'
		};
	},
	render: function(){
		if(this.props.data){
			return this.props.children;
		}else {
			return <DataLoader {...this.props} />;
		}
	}
});
