import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from '../atoms/InputField';
// import Accounts from './Accounts'

// TODO: Use redux-form to fix controlled to uncontrolled component console warning
// https://scotch.io/tutorials/managing-form-state-in-react-with-redux-form
// https://medium.com/dailyjs/why-build-your-forms-with-redux-form-bcacbedc9e8
// https://medium.com/@jtbennett/using-redux-form-to-handle-user-input-1392826f2c6d

class ProfileDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: props.user.name || '',
				email: props.user.email || '',
				password: props.user.password || '',
				phone: props.user.phone || '',
				address: props.user.address || '',
			},
			hasChange: false,
			hasError: false,
			isNameValid: true,
			isEmailValid: true,
			isPassValid: true,
			isPhoneValid: true,
			isAddressValid: true,
			message: ''
		};
		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentDidMount() {
		this.setState({ user: this.props.user });
	}

	handleSubmit(e) {
		e.preventDefault();

		const user = {
			name: this.state.user.name,
			email: this.state.user.email,
			password: this.state.user.password,
			phone: this.state.user.phone,
			address: this.state.user.address
		};

		this.setState( user );
	};

	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			hasChange: true,
			hasError: false,
			isEmailValid: true,
			isPassValid: true,
			message: ''
		})
	}

	render() {
		return (
			<form className="profile-form row" onSubmit={this.handleSubmit}>

				<legend className="col s12">
					<p className="flow-text">You can view and manage your personal details here.</p>
					<p>Hint: Do not forget to save your changes when updating your personal information</p>
				</legend>

				<InputField
					value={this.props.user.name}
					className="col s12"
					name="name"
					label="Name"
					icon="person"
					type="text"
					required={true}
					pattern=".{3,}"
					data-error="Username must be at least 3 characters long, sample: John Doe"
					onChange={this.onInputChange}
				/>

				<InputField
					value={this.props.user.email}
					className="col s12"
					type="email"
					name="email"
					label="Email"
					icon="email"
					required={true}
					// data-input-class={ this.state.hasError && !this.state.isEmailValid && 'invalid' }
					data-error={ this.state.message || 'Please supply a valid email address, sample: john@email.com' }
					data-success="Valid"
					onChange={ this.onInputChange }
				/>

				<InputField
					value={this.props.user.password}
					className="col s12"
					type="password"
					name="password"
					label="Password"
					icon="vpn_key"
					required={true}
					// data-input-class={ this.state.hasError && !this.state.isPassValid && 'invalid' }
					data-error={ this.state.message || 'Password is required, sample: john' }
					data-success="Valid"
					onChange={ this.onInputChange }
				/>

				<InputField
					value={this.props.user.phone}
					className="col s12"
					type="tel"
					name="phone"
					label="Phone Number"
					icon="phone"
					required={true}
					pattern=".{7,12}"
					max="999999999999"
					data-error="Phone is required and must be a 7 to 12 digits number"
					onChange={ this.onInputChange }
				/>

				<InputField
					value={this.props.user.address}
					className="col s12"
					type="text"
					name="address"
					label="Address"
					icon="location_on"
					required={true}
					data-error="Address is required, sample: Street Name, City, Country"
					onChange={ this.onInputChange }
				/>

				<button type="submit" className="btn-large waves-effect waves-light center-block" disabled={!this.state.hasError && this.state.hasChange}>
					<i className="material-icons">save</i>Save Changes
				</button>

			</form>
		);
	}
}

ProfileDetails.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	console.log('map profile', state.login);
	return ({
		user: state.login.user
	})
};

export default connect(mapStateToProps)(ProfileDetails);

