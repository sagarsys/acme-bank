import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../atoms/Logo';

class NavBar extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className="nav-wrapper">

						<Link to="/dashboard" className="brand-logo">
							<Logo />
						</Link>

						<button className="btn-nostyle white-text sidenav-trigger" data-target="mobile-sidenav">
							<i className="material-icons">menu</i>
						</button>

						<ul className="right hide-on-small-and-down">

							<li className="active">
								<Link to='/dashboard'>
									<i className="material-icons left">dashboard</i>Dashboard
								</Link>
							</li>

							<li>
								<Link to='/transactions'>
									<i className="material-icons left">view_list</i>Transactions
								</Link>
							</li>

							<li>
								<Link to='/profile'>
									<i className="material-icons left">person</i>Profile
								</Link>
							</li>

							<li>
								<Link to='/logout'>
									<i className="material-icons left">power_settings_new</i>Logout
								</Link>
							</li>

						</ul>
						<Link to='/' className="btn-nostyle right hide-on-med-and-up mobile-logout">
							<i className="material-icons">power_settings_new</i>
						</Link>
						{/*<button className="btn-nostyle right hide-on-med-and-up mobile-logout">*/}
							{/*<i className="material-icons">power_settings_new</i>*/}
						{/*</button>*/}
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

export default NavBar;
