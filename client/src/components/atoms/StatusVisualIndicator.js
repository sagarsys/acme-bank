import React from 'react';
import PropTypes from 'prop-types';

const StatusVisualIndicator = props => {
	return props.status ?
		(
			<span className="circle status-circle green"> </span>
		)
	:
		(
			<span className="circle status-circle red"> </span>
		)
};

StatusVisualIndicator.propTypes = {
	status: PropTypes.bool.isRequired
};

export default StatusVisualIndicator;
