import React from 'react';
import PropTypes from 'prop-types';

const ActivityIndicator = props => {
	return props.isDisplayed ?
		(
			<div className="progress">
				<div className="indeterminate"> </div>
			</div>
		)
		:
		null;
};

ActivityIndicator.propTypes = {
	isDisplayed: PropTypes.bool.isRequired
};

export default ActivityIndicator;
