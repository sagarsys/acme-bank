import React from 'react';
import PropTypes from 'prop-types';

import HeroImage from '../atoms/HeroImage';
import Welcome from '../atoms/Welcome';
import QuickProfileAccess from '../atoms/QuickProfileAccess';

const HeroBanner = props => (
	<div className="card hero-banner">
		<div className="card-image">
			<HeroImage />
			<QuickProfileAccess className="card-title" username={props.username} />
		</div>
		<Welcome accountNumber={props.accountNumber} />
	</div>
);

HeroBanner.propTypes = {
	username: PropTypes.string.isRequired,
	accountNumber: PropTypes.number.isRequired,
};

export default HeroBanner;
