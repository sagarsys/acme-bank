import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PUT from '../../helpers/fetch-put';

import Input from './Input';

// import Accounts from './Accounts'

class ProfileDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user,
			error: {
				name: false,
				email: false,
				password: false,
				phone: false,
				address: false
			},
			hasChange: false,
			hasError: false,
			message: ''
		};
		console.warn(this.state);
		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentDidMount() {
		const user = this.props.user;
		this.setState({ user });
		window.M && window.M.updateTextFields() && window.M.validate_field();
	}

	handleSubmit(e) {
		e.preventDefault();

		PUT('/api/profile', this.state.user)
			.then(
				data => console.log(data)
			);
			// .then(data => dispatch({
			// 		type: SAVE_ACTION,
			// 		payload: data
			// 	})

		this.setState({ hasChange: false });
	};

	onInputChange(e) {
		let field = e.target.name,
			value = e.target.value;
		if (typeof value !== 'string') {
			value = value.toString();
		}
		const user = Object.assign({}, this.state.user, { [field]: value });
		const error = Object.assign({}, this.state.error, { [field]: false });
		this.setState((prevState) => {
			// console.log(Object.is(prevState.user, this.state.user));
			return {
				user,
				error,
				hasChange: (prevState.user[field] && prevState.user[field] !== value) || prevState.hasChange,
			}
		});
	}

	render() {
		return (
			<form className="profile-form row" onSubmit={this.handleSubmit}>

				<legend className="col s12">
					<p className="flow-text">You can view and manage your personal details here.</p>
					<p>Hint: Do not forget to save your changes when updating your personal information</p>
				</legend>

				<Input
					type="text"
					name="name"
					label="Name"
					defaultValue={this.state.user.name}
					onChange={this.onInputChange}
					icon="person"
					wrapperclass="col s12"
					required={true}
					pattern=".{3,}"
					error="Username must be at least 3 characters long, sample: John Doe"
					success="Valid"
				/>

				<Input
					type="email"
					name="email"
					label="Email"
					defaultValue={this.state.user.email}
					onChange={this.onInputChange}
					icon="email"
					wrapperclass="col s12"
					required={true}
					error={ this.state.message || 'Please supply a valid email address, sample: john@email.com' }
					success="Valid"
				/>

				<Input
					type="password"
					name="password"
					label="Password"
					defaultValue={this.state.user.password}
					onChange={this.onInputChange}
					icon="vpn_key"
					wrapperclass="col s12"
					required={true}
					error={ this.state.message || 'Password is required, sample: john' }
					success="Valid"
				/>

				<Input
					type="tel"
					name="phone"
					label="Phone Number"
					defaultValue={this.state.user.phone}
					onChange={this.onInputChange}
					icon="phone"
					wrapperclass="col s12"
					required={true}
					pattern=".{7,12}"
					max="999999999999"
					error="Phone is required and must be a 7 to 12 digits number"
					success="Valid"
				/>

				<Input
					type="text"
					name="address"
					label="Address"
					defaultValue={this.state.user.address}
					onChange={this.onInputChange}
					icon="location_on"
					wrapperclass="col s12"
					required={true}
					error="Address is required, sample: Street Name, City, Country"
					success="Valid"
				/>

				{/*TODO: Implement Accounts to toggle Account status*/}
				{/*<Accounts data-edit={true} />*/}

				<button type="submit" className="btn-large waves-effect waves-light center-block" disabled={!this.state.hasChange}>
					<i className="material-icons">save</i>Save Changes
				</button>

			</form>
		);
	}
}

ProfileDetails.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	user: state.login.user
});

export default withRouter(connect(mapStateToProps)(ProfileDetails));

