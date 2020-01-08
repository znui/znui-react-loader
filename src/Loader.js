var React = require('react') || znui.React;
var DataLoader = require('./DataLoader');

module.exports = znui.react.createClass({
	displayName:'ZRLoader',
	getDefaultProps: function (){
		return {
			loader: 'timer',
			color: 'white',
			content: 'Loading...',
			className: 'white-background',
			size: 'size-large',
			layout: 'flex-row'
		};
	},
	render:function(){
		return (
			<div style={this.props.style} className={znui.react.classname("zr-loader", this.props.className, this.props.color, this.props.layout)}>
				<DataLoader className={this.props.dataLoaderClassName} loader={this.props.loader} color={this.props.color} size={this.props.size} />
				<div className="content">{this.props.content}</div>
			</div>
		);
	}
});
