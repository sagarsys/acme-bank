import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Transactions from './components/Transactions';


class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<main className="container">
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/transactions/:accountNumber" component={Transactions} />
					<Route exact path="/transactions" component={Transactions} />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
