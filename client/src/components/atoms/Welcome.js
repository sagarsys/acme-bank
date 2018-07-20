import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
	<div {...props}>
		<h1><small>This is your Dashboard.</small></h1>
		<p className="flow-text">You can view your active accounts summary below, or for a more detailed view of your deposits and/or withdrawals check out your <Link to={`/transactions/${props['data-account-number']}`}>Transactions</Link>.</p>
	</div>
);
