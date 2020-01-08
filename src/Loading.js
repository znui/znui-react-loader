var React = znui.React || require('react');
var Loader = require('./Loader');
module.exports = React.createClass({
	displayName:'ZRLoading',
	getDefaultProps: function (){
		return {
			data: null,
			loader: 'timer',
			content: 'Loading...'
		};
	},
	render: function(){
		if(this.props.data){
			return this.props.children;
		}else {
			return <Loader {...this.props} />;
		}
	}
});
