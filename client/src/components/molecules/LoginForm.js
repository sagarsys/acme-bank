import React, { Component } from 'react';
import Logo from '../atoms/Logo';

class LoginForm extends Component {

	render() {
		return (
			<form className="login-form card-panel">

				<legend>
					<Logo className="center-block" />
					<p className="flow-text">Welcome to Acme Bank!</p>
					<p>You must login to access your information.</p>
				</legend>

				<div className="input-field">
					<i className="material-icons prefix">email</i>
					<input type="email" name="email" className="validate" required />
					<label htmlFor="email">Email</label>
					<span className="helper-text" data-error="Please supply a valid email address, sample: john@email.com"> </span>
				</div>

				<div className="input-field">
					<i className="material-icons prefix">vpn_key</i>
					<input type="password" name="password" className="validate" required />
					<label htmlFor="password">Password</label>
					<span className="helper-text" data-error="Password is required, sample: john"> </span>
				</div>

				<button type="submit" className="btn-large waves-effect waves-light center-block">Login</button>

			</form>
		);
	}

}

export default LoginForm;
