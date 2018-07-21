import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history } from '../../store';
import { OK_STATUS } from '../../actions/types';

import Logo from '../atoms/Logo';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		this.props.logoutUser();
	}

	render() {
		if (this.props.status === OK_STATUS) {
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
									<button className="btn-nostyle" onClick={this.handleLogOut} title="Log out from website">
										<i className="material-icons left">power_settings_new</i>Logout
									</button>
								</li>

							</ul>
							<button className="btn-nostyle right hide-on-med-and-up mobile-logout" onClick={this.handleLogOut}>
								<i className="material-icons">power_settings_new</i>
							</button>
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
		else {
			return false;
		}
	}
}


NavBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	status: PropTypes.number.isRequired,
};

export default NavBar;
