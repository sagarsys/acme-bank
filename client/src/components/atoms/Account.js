import React from 'react';
import PropTypes from 'prop-types';

import Status from './Status';
import FloatingTransactionLink from './FloatingTransactionLink';
import AccountBalance from './AccountBalance';

const Account = (props) => {
	const hasSwitch = (props.edit || !props.view);
	return (
		<li className="collection-item avatar">
			<i className="material-icons white-text circle">account_balance</i>
			<p className="title account-type" title="Account type">{props.account.type.toUpperCase()} Accounts</p>
			<AccountBalance
				currency={props.account.currency}
				balance={props.account.balance}
				accountNumber={props.account.number}
			/>
			<FloatingTransactionLink
				floating={props.floating}
				status={props.account.status}
				accountNumber={props.account.number}
			/>
			<Status
				status={props.account.status}
				edit={props.edit}
				view={props.view}
				accountNumber={hasSwitch ? props.account.number : null}
				onChange={hasSwitch ? props.onChange : null}
			/>
		</li>
	);
};

Account.propTypes = {
	edit: PropTypes.bool,
	view: PropTypes.bool,
	floating: PropTypes.bool,
	account: PropTypes.object.isRequired,
};


export default Account;
