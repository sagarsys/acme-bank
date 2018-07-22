import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_STATUS, OK_STATUS, REDIRECT_STATUS } from './actions/types';
import { checkLogin, logoutUser, redirectUser } from './actions/loginActions';
import { setActivity, setNoActivity } from './actions/activityIndicatorActions';

import './App.css';
import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Transactions from './components/Transactions';
import ActivityIndicator from './components/atoms/ActivityIndicator';

class App extends Component {
	componentDidMount() {
		const props = this.props;
		if (props.status !== OK_STATUS && props.status !== DEFAULT_STATUS && props.status !== REDIRECT_STATUS) {
			// redirect to login
			this.props.redirectUser();
		}
	}

	componentWillUnmount() {
		this.props.logoutUser();
	}

	render() {
		return (
			<div className="App">
				<ActivityIndicator isDisplayed={this.props.activity} />
				<NavBar status={this.props.status} logoutUser={this.props.logoutUser}/>
				<main className="container">
					<Route exact path={ '/' }
					       component={Login}
					       checkLogin={this.props.checkLogin}
					       redirectUser={this.props.redirectUser}
					/>
					<Route exact path={ '/login' }
					       component={Login}
					       checkLogin={this.props.checkLogin}
					       redirectUser={this.props.redirectUser}
					/>
					<Route exact path="/dashboard"
					       component={Dashboard}
					       status={this.props.status || DEFAULT_STATUS}
					       user={this.props.user}
					       redirectUser={this.props.redirectUser}
					/>
					<Route exact path="/profile"
					       component={Profile}
					       status={this.props.status || DEFAULT_STATUS}
					       user={this.props.user}
					       redirectUser={this.props.redirectUser}
					/>
					<Route exact path="/transactions/:accountNumber"
					       component={Transactions}
					       status={this.props.status || DEFAULT_STATUS}
					       user={this.props.user}
					       redirectUser={this.props.redirectUser}
					/>
					<Route exact path="/transactions"
					       component={Transactions}
					       status={this.props.status || DEFAULT_STATUS}
					       user={this.props.user}
					       redirectUser={this.props.redirectUser}
					/>
				</main>
				<Footer />
			</div>
		);
	}
}

const mapSateToProps = state => ({
	status: state.login.status,
	message: state.login.message,
	user: state.login.user,
	activity: state.activity.hasActivity
});

App.propTypes = {
	checkLogin: PropTypes.func.isRequired,
	logoutUser: PropTypes.func.isRequired,
	redirectUser: PropTypes.func.isRequired,
	setActivity: PropTypes.func.isRequired,
	setNoActivity: PropTypes.func.isRequired,
	status: PropTypes.number.isRequired,
	user: PropTypes.object,
	message: PropTypes.string,
};

export default withRouter(
	connect(
		mapSateToProps,
			{
				checkLogin,
				logoutUser,
				redirectUser,
				setActivity,
				setNoActivity
			}
	)(App)
);
