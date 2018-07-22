import React from 'react';
import PropTypes from 'prop-types';

import { formatNumberToCurrencyFormat } from '../../helpers/utilities';
import CurrencyDisplay from './CurrencyDisplay';

const AccountBalance = props => {
	return (
		<p className="flow-text account-balance">
				<span title="Account Balance">
					<CurrencyDisplay currency={props.currency} />
					<span>{formatNumberToCurrencyFormat(props.balance, 2)}</span>
					<br />
				</span>
			<small className="account-num" title="Account Number">
				<strong>Account Number: </strong>{props.accountNumber}
			</small>
		</p>
	);
};

AccountBalance.propTypes = {
	currency: PropTypes.string.isRequired,
	balance: PropTypes.number.isRequired,
	accountNumber: PropTypes.number.isRequired,
};

export default AccountBalance;
