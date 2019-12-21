var React = require('react') || znui.React;

module.exports = znui.react.createClass({
	displayName:'DataLoader',
	getDefaultProps: function (){
		return {
			loader: 'timer',
			content: 'Loading...',
			className: ''
		};
	},
	render:function(){
		return (
			<div style={this.props.style} className={'zr-data-loader ' + this.props.className}>
				<div className="loader" data-loader={this.props.loader}></div>
				<div className="content">{this.props.content}</div>
			</div>
		);
	}
});
