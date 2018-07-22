import React from 'react';
import PropTypes from 'prop-types';

const CurrencyDisplay = props => {
	return props.currency === 'EUR' ?
		(
			<i className="material-icons">euro_symbol</i>
		)
		:
		(
			<span>{props.account.currency}</span>
		);
};

CurrencyDisplay.propTypes = {
	currency: PropTypes.string.isRequired
};

export default CurrencyDisplay;
