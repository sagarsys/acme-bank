import React, {Component} from 'react';
import Logo from '../atoms/Logo';

class NavBar extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo"><Logo /></a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-small-and-down">
							<li className="active">
								<a href="sass.html">
									<i className="material-icons left">dashboard</i>Dashboard
								</a>
							</li>
							<li>
								<a href="badges.html">
									<i className="material-icons left">view_list</i>Transactions
								</a>
							</li>
							<li>
								<a href="collapsible.html">
									<i className="material-icons left">person</i>Profile
								</a>
							</li>
							<li>
								<a href="mobile.html">
									<i className="material-icons left">power_settings_new</i>Logout
								</a>
							</li>
						</ul>
						<button className="btn-nostyle right hide-on-med-and-up mobile-logout">
							<i className="material-icons">power_settings_new</i>
						</button>
					</div>
				</nav>
				<ul className="sidenav" id="mobile-demo">
					<li className="active">
						<a href="sass.html">
							<i className="material-icons left">dashboard</i>Dashboard
						</a>
					</li>
					<li>
						<a href="badges.html">
							<i className="material-icons left">view_list</i>Transactions
						</a>
					</li>
					<li>
						<a href="collapsible.html">
							<i className="material-icons left">person</i>Profile
						</a>
					</li>
				</ul>
			</header>
		);
	}
}

export default NavBar;
