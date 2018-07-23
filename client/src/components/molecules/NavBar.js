import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OK_STATUS } from '../../actions/types';
import { logoutUser, redirectUser } from '../../actions/loginActions';
import { displayNotification } from '../../helpers/materialize';

import Logo from '../atoms/Logo';
import LogoutButton from '../atoms/LogoutButton';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		this.props.logoutUser();
		displayNotification('Logout successful!')
	}

	render() {
		if (this.props.status !== OK_STATUS) {
			return null;
		}
		return (
			<header>
				<nav>
					<div className="nav-wrapper">
						<NavLink to="/dashboard" className="brand-logo" title="Go to your Dashboard">
							<Logo />
						</NavLink>
						<button className="btn-nostyle sidenav-trigger" data-target="mobile-sidenav" title="Open side menu">
							<i className="material-icons">menu</i>
						</button>
						<ul className="right hide-on-small-and-down">
							<li>
								<NavLink to='/dashboard' activeClassName='active' title="Go to your dashboard">
									<i className="material-icons left">dashboard</i>Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink to='/transactions' activeClassName='active' title="Go to your transacctions">
									<i className="material-icons left">view_list</i>Transactions
								</NavLink>
							</li>
							<li>
								<NavLink to='/profile' activeClassName='active' title="Go to your profile">
									<i className="material-icons left">person</i>Profile
								</NavLink>
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
						<NavLink activeClassName='active' to="/dashboard">
							<i className="material-icons left">dashboard</i>Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to="/transactions">
							<i className="material-icons left">view_list</i>Transactions
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to="/profile">
							<i className="material-icons left">person</i>Profile
						</NavLink>
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
	status: state.app.status
});

export default withRouter(connect(mapStateToProps, { logoutUser, redirectUser })(NavBar))
