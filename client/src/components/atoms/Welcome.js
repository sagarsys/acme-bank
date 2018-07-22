import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div className="card-content">
		<h1><small>This is your Dashboard.</small></h1>
		<p className="flow-text">
			You can view your active accounts summary below, or for a more detailed view of your deposits and/or withdrawals check out your&nbsp;
			<Link to={`/transactions`}>Transactions</Link>.
		</p>
	</div>
);
