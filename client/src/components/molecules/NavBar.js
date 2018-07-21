import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OK_STATUS } from '../../actions/types';
import { logoutUser, redirectUser } from '../../actions/loginActions';

import Logo from '../atoms/Logo';
import LogoutButton from '../atoms/LogoutButton';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		this.props.logoutUser();
	}

	render() {
		if (this.props.status !== OK_STATUS) {
			return null;
		}
		return (
			<header>
				<nav>
					<div className="nav-wrapper">
						<Link to="/dashboard" className="brand-logo" title="Go to your Dashboard">
							<Logo />
						</Link>
						<button className="btn-nostyle sidenav-trigger" data-target="mobile-sidenav" title="Open side menu">
							<i className="material-icons">menu</i>
						</button>
						<ul className="right hide-on-small-and-down">
							<li className="active">
								<Link to='/dashboard' title="Go to your dashboard">
									<i className="material-icons left">dashboard</i>Dashboard
								</Link>
							</li>
							<li>
								<Link to='/transactions' title="Go to your transacctions">
									<i className="material-icons left">view_list</i>Transactions
								</Link>
							</li>
							<li>
								<Link to='/profile' title="Go to your profile">
									<i className="material-icons left">person</i>Profile
								</Link>
							</li>
							<li>
								<LogoutButton onLogoutClick={this.handleLogOut} />
							</li>
						</ul>
						<LogoutButton onLogoutClick={this.handleLogOut} />
					</div>
				</nav>

				<ul className="sidenav" id="mobile-sidenav">
					<li className="active">
						<Link to="/dashboard">
							<i className="material-icons left">dashboard</i>Dashboard
						</Link>
					</li>
					<li>
						<Link to="/transactions">
							<i className="material-icons left">view_list</i>Transactions
						</Link>
					</li>
					<li>
						<Link to="/profile">
							<i className="material-icons left">person</i>Profile
						</Link>
					</li>
				</ul>
			</header>
		);
	}
}

NavBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	status: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
	status: state.login.status
});

export default withRouter(connect(mapStateToProps, { logoutUser, redirectUser })(NavBar))
