import React from 'react';

import InputField from '../atoms/InputField';
// import Accounts from './Accounts'

export default (props) => (
	<form className="profile-form row">
		<legend className="col s12">
			<p className="flow-text">You can view and manage your personal details here.</p>
			<p>Hint: Do not forget to save your changes when updating your personal information</p>
		</legend>

		<InputField
			className="col s12"
			name="name"
			label="Name"
			icon="person"
			type="text"
			required={true}
			pattern=".{3,}"
			data-error="Username must be at least 3 characters long, sample: John Doe"
		/>

		<InputField
			className="col s12"
			type="email"
			name="email"
			label="Email"
			icon="email"
			required={true}
			data-error="Please supply a valid email address, sample: john@email.com"
		/>

		<InputField
			className="col s12"
			type="password"
			name="password"
			label="Password"
			icon="vpn_key"
			required={true}
			data-error="Password is required, sample: john"
		/>

		<InputField
			className="col s12"
			type="number"
			name="phone"
			label="Phone Number"
			icon="phone"
			required={true}
			pattern=".{7,12}"
			max="999999999999"
			data-error="Phone is required and must be a 7 to 12 digits number"
		/>

		<InputField
			className="col s12"
			type="text"
			name="address"
			label="Address"
			icon="location_on"
			required={true}
			data-error="Address is required, sample: Street Name, City, Country"
		/>

		<button type="submit" className="btn-large waves-effect waves-light center-block" disabled>
			<i className="material-icons">save</i>Save Changes
		</button>

	</form>
);
