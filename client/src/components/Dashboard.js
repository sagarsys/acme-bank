import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroBanner from './molecules/HeroBanner';
import Accounts from './molecules/Accounts';

class Dashboard extends Component {
	render() {
		const props = this.props;
		return (
			<section>
				<HeroBanner user={props.user} />
				<Accounts user={props.user} />
			</section>
		);
	}
}

Dashboard.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	user: state.login.user
});

export default connect(mapStateToProps)(Dashboard);
