var React = require('react')
var Prompt = require('../components/prompt');

var PromptContainer = React.createClass({
	contextTypes: { // can be accessed by this.context
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			username: ''
		}
	},
	handleUpdateUser: function (e) {
		this.setState({
			username: e.target.value
		});
	},
	handleSubmitUser: function (e) {
		e.preventDefault();
		this.setState({
			username: '' // back btn click, user will not get the old user name
		});

		if(this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			});
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},
	render: function () {
		return(
			<Prompt 
				onSubmitUser={this.handleSubmitUser} 
				onUpdateUser={this.handleUpdateUser} 
				username={this.state.username} 
				header={this.props.route.header} />
		);
	}
});

module.exports = PromptContainer;