import React from 'react';

import HeroImage from '../atoms/HeroImage';
import Welcome from '../atoms/Welcome';
import QuickProfileAccess from '../atoms/QuickProfileAccess';

export default (props) => (
	<div className="card hero-banner" {...props}>
		<div className="card-image">
			<HeroImage />
			<QuickProfileAccess className="card-title" user={props.user} />
		</div>
		<Welcome data-account-number={props.user.accounts && props.user.accounts[0].number} className="card-content" />
	</div>
);

