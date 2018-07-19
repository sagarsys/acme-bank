import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProfileDetails from './molecules/ProfileDetails';

class Profile extends Component {
	render() {
		return (
			<section className="profile">
				<h1>Personal Details</h1>
				<ProfileDetails />
			</section>
		);
	}
}

Profile.propTypes = {};

export default Profile;
