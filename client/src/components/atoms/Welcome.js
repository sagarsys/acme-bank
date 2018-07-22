import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Welcome = (props) => (
	<div className="card-content">
		<h1><small>This is your Dashboard.</small></h1>
		<p className="flow-text">You can view your active accounts summary below, or for a more detailed view of your deposits and/or withdrawals check out your
			<Link to={`/transactions/${props.accountNumber}`}>Transactions</Link>.
		</p>
	</div>
);

Welcome.propTypes = {
	accountNumber: PropTypes.number.isRequired,
};

export default Welcome;
