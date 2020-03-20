var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRDataLoader',
	getDefaultProps: function (){
		return {
			loader: 'timer',
			color: 'primary',
			size: 'size-large',
			className: 'primary'
		};
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size)} style={this.props.style}>
				<div className="loader-loading" data-loader={this.props.loader} />
				{ !!this.props.title && <span className="title">{this.props.title}</span> }
			</div>
		);
	}
});