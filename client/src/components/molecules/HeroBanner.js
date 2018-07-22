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
		<Welcome />
	</div>
);

HeroBanner.propTypes = {
	username: PropTypes.string.isRequired,
};

export default HeroBanner;
