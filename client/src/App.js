import React, {Component} from 'react';
import './App.css';
import POST from './helpers/fetch-post';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';

class App extends Component {
	state = {users: []};

	componentDidMount() {
		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({users}));

		POST('/api/login', {
			email: 'johsn@email.com',
			password: 'johdn'
		}).then(
			data => console.log(data)
		)
	}

	render() {
		return (
			<div className="App">
				<NavBar/>
				<main className="container">
					<Login />
					<Dashboard />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
// import React from 'react';
// import { Route, Link } from 'react-router-dom'
//
// const App = () => (
// 	<div>
//
// 	</div>
// );
//
// export default App;
