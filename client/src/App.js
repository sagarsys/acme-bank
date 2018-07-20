import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Transactions from './components/Transactions';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<NavBar/>
					<main className="container">
						<Login />
						<Dashboard />
						<Profile />
						<Transactions />
					</main>
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
