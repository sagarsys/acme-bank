import React from 'react';

import HeroImage from '../atoms/HeroImage';
import Welcome from '../atoms/Welcome';
import QuickProfileAccess from '../atoms/QuickProfileAccess';

export default (props) => (
	<div className="card hero-banner" {...props}>
		<div className="card-image">
			<HeroImage />
			<QuickProfileAccess className="card-title" />
		</div>
		<Welcome className="card-content" />
	</div>
);

