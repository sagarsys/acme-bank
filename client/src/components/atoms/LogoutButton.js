import React from 'react';

const LogoutButton = () => {
	return (
			<button className="btn-nostyle" onClick={this.handleLogOut} title="Log out from website">
				<i className="material-icons left">power_settings_new</i>Logout
			</button>
	);
};

export default LogoutButton;
