import React from 'react';
import PropTypes from 'prop-types';

import TransactionTable from '../atoms/TransactionTable';
import Account from '../atoms/Account';

const AccountTransaction = (props) => {
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

AccountTransaction.propTypes = {
	account: PropTypes.object.isRequired,
};

export default AccountTransaction;
