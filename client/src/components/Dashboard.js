import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OK_STATUS } from '../actions/types';
import { redirectUser } from '../actions/loginActions';

import HeroBanner from './molecules/HeroBanner';
import Accounts from './molecules/Accounts';

class Dashboard extends Component {
	componentDidMount() {
		const props = this.props;
		if (props.status && props.status !== OK_STATUS) {
			// redirect to login
			props.redirectUser();
		}
	}

	render() {
		const props = this.props;
		if (props.status !== OK_STATUS) return null;
		return (
			<section>
					<HeroBanner user={props.user} />
					<Accounts accounts={props.user.accounts} view={true} floating={true} />
				</section>
		);
	}
}

Dashboard.propTypes = {
	status: PropTypes.number,
	user: PropTypes.object,
	redirectUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	user: state.login.user,
	status: state.login.status
});

export default withRouter(connect(mapStateToProps, { redirectUser })(Dashboard));
