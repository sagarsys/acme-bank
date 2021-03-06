import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkLogin, redirectUser } from '../../actions/loginActions';
import { setActivity, setNoActivity } from '../../actions/activityIndicatorActions';
import {
	_404_ERROR_STATUS,
	AUTHENTICATION_ERROR_STATUS,
	DEFAULT_STATUS,
	ERROR_STATUS,
	OK_STATUS
} from '../../actions/types';
import { displayNotification } from '../../helpers/materialize';

import Logo from '../atoms/Logo';
import Input from './Input';

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

	componentDidUpdate(prevProps) {
		if (prevProps && prevProps !== this.props && this.props.status) {
			this.props.setNoActivity();
			switch ( this.props.status ) {
				case OK_STATUS:
					displayNotification(`Login successful! Welcome to your dashboard, ${ this.props.user.name }!`, 'success');
					this.props.redirectUser('/dashboard', { status: OK_STATUS, message: '' });
					break;
				case DEFAULT_STATUS:
					this.setState({ hasError: false });
					break;
				case _404_ERROR_STATUS:
					// User does not exist
					this.setState({ hasError: true, isEmailValid: false, message: 'No user with this email found' });
					break;
				case AUTHENTICATION_ERROR_STATUS:
					// Wrong password
					this.setState({ hasError: true, isPassValid: false, message: 'Wrong password' });
					break;
				case ERROR_STATUS:
					// Both
					this.setState({ hasError: true, isEmailValid: false, isPassValid: false, message: 'Sorry, looks like something went wrong! Try again? :)' });
					break;
				case ( this.props.status >= ERROR_STATUS ):
				default:
					this.setState({ hasError: true });
					break;
			}
		}
	}

	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			hasError: false,
			isEmailValid: true,
			isPassValid: true,
			message: ''
		});
	}

	handleSubmit(e) {
		this.props.setActivity();
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

				<Input
					type="email"
					name="email"
					label="Email"
					onChange={this.onInputChange}
					icon="email"
					required={true}
					className={ state.hasError && !state.isEmailValid && 'invalid' }
					error={ state.message || 'Please supply a valid email address, sample: john@email.com' }
					success="Valid"
				/>

				<Input
					type="password"
					name="password"
					label="Password"
					onChange={this.onInputChange}
					icon="vpn_key"
					required={true}
					className={ state.hasError && !state.isPassValid && 'invalid' }
					error={ state.message || 'Password is required, sample: john' }
					success="Valid"
				/>

				<button type="submit" className="btn-large waves-effect waves-light center-block">Login</button>

			</form>
		);
	}

}

LoginForm.propTypes = {
	checkLogin: PropTypes.func.isRequired,
	redirectUser: PropTypes.func.isRequired,
	setActivity: PropTypes.func.isRequired,
	setNoActivity: PropTypes.func.isRequired,
	status: PropTypes.number,
	user: PropTypes.object,
	message: PropTypes.string,
};

const mapStateToProps = (state) => ({
	status: state.app.status,
	message: state.app.message,
	user: state.app.user,
});

export default withRouter(connect(mapStateToProps, { checkLogin, redirectUser, setActivity, setNoActivity })(LoginForm));
