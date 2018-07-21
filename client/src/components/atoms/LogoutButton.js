import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogoutButton extends Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		this.props.onLogoutClick();
	}

	render() {
		return (
			<button className="btn-nostyle" onClick={this.handleLogout} title="Log out from website">
				<i className="material-icons left">power_settings_new</i>Logout
			</button>
		);
	}
}

LogoutButton.propTypes = {
	onLogoutClick: PropTypes.func.isRequired
};

export default LogoutButton;
