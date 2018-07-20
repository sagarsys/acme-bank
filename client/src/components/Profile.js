import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProfileDetails from './molecules/ProfileDetails';

class Profile extends Component {
	render() {
		const props = this.props;
		return (
			<section className="profile">
				<h1>Personal Details</h1>
				<ProfileDetails user={props.user}/>
			</section>
		);
	}
}

Profile.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	user: state.login.user
});

export default connect(mapStateToProps)(Profile);
