import React, { Component } from 'react';
import Logo from '../atoms/Logo';
import InputField from '../atoms/InputField';

class LoginForm extends Component {

	render() {
		return (
			<form className="login-form card-panel">

				<legend>
					<Logo className="center-block" />
					<p className="flow-text">Welcome to Acme Bank!</p>
					<p>You must login to access your information.</p>
				</legend>

				<InputField
					type="email"
					name="email"
					label="Email"
					icon="email"
					required={true}
					data-error="Please supply a valid email address, sample: john@email.com"
				/>

				<InputField
					type="password"
					name="password"
					label="Password"
					icon="vpn_key"
					required={true}
					data-error="Password is required, sample: john"
				/>

				<button type="submit" className="btn-large waves-effect waves-light center-block">Login</button>

			</form>
		);
	}

}

export default LoginForm;
