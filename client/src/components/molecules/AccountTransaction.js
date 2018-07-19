import React from 'react';
import TransactionTable from '../atoms/TransactionTable';
import Account from '../atoms/Account';

export default (props) => (
	<li {...props}>
		<div className="collapsible-header">
			<ul>
				<Account data-view={true} />
			</ul>
		</div>
		<div className="collapsible-body">
			<TransactionTable />
		</div>
	</li>
);
