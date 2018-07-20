import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { checkLogin } from '../../actions/loginActions';

import Logo from '../atoms/Logo';
import InputField from '../atoms/InputField';

import { history } from '../../store';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			hasError: false,
			isEmailValid: true,
			isPassValid: true,
			message: ''
		};
		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		switch ( nextProps.status ) {
			case 200:
				console.log('redirecting....');
				history.push('/dashboard');
				break;
			case 100:
				this.setState({ hasError: false });
				break;
			case 404:
				// User does not exist
				this.setState({ hasError: true, isEmailValid: false, message: 'No user with this email found' });
				break;
			case 401:
				// Wrong password
				this.setState({ hasError: true, isPassValid: false, message: 'Wrong password' });
				break;
			case 400:
				// Both
				this.setState({ hasError: true, isEmailValid: false, isPassValid: false, message: 'Sorry, looks like something went wrong! Try again? :)' });
				break;
			case ( nextProps.status >= 400 ):
			default:
				this.setState({ hasError: true });
				break;
		}
	}

	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			hasError: false,
			isEmailValid: true,
			isPassValid: true,
			message: ''
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({
			hasError: false,
			isEmailValid: true,
			isPassValid: true,
			message: ''
		});

		const loginDetails = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.checkLogin(loginDetails);
	}

	render() {
		const props = this.props;
		const state = this.state;

		return (
			<form className="login-form card-panel small" onSubmit={ this.handleSubmit }>

				<legend>
					<Logo className="center-block"/>
					<p className="flow-text">Welcome to Acme Bank!</p>
					<p>You must login to access your information.</p>
				</legend>

				{ state.hasError && (
					<div className={'error-panel red scale-transition' + (!state.hasError && ' scale-out')}>
						<p className="white-text">
							<i className="material-icons small">error</i>
							{ props.message }
						</p>
					</div>
				) }

				<InputField
					type="email"
					name="email"
					label="Email"
					icon="email"
					required={ true }
					data-input-class={ state.hasError && !state.isEmailValid && 'invalid' }
					data-error={ state.message || 'Please supply a valid email address, sample: john@email.com' }
					data-success="Valid"
					onChange={ this.onInputChange }
				/>

				<InputField
					type="password"
					name="password"
					label="Password"
					icon="vpn_key"
					required={ true }
					data-input-class={ state.hasError && !state.isPassValid && 'invalid' }
					data-error={ state.message || 'Password is required, sample: john' }
					data-success="Valid"
					onChange={ this.onInputChange }
				/>

				<button type="submit" className="btn-large waves-effect waves-light center-block">Login</button>

			</form>
		);
	}

}

LoginForm.propTypes = {
	checkLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	status: state.login.status,
	message: state.login.message,
	user: state.login.user
});

export default connect(mapStateToProps, { checkLogin })(LoginForm);
