import React from 'react';
import TransactionTable from '../atoms/TransactionTable';
import Account from '../atoms/Account';

export default (props) => {
	return props.account.status ?
		(
			<li {...props}>
				<div className="collapsible-header">
					<ul className="accounts collection account-transaction">
						<Account view={true} account={props.account} />
					</ul>
				</div>
				<div className="collapsible-body">
					<TransactionTable account={props.account} />
				</div>
			</li>
		)
		:
		null;
};
