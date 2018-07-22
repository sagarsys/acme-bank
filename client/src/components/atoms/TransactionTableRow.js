import React from 'react';
import PropTypes from 'prop-types';
import { formatNumberToCurrencyFormat } from '../../helpers/utilities';

const TransactionTableRow = props => {
	return (
		<tr>
			<td>{props.transaction.id}</td>
			<td>{props.transaction.date}</td>
			<td>{props.transaction.type.toUpperCase()}</td>
			<td>{props.transaction.currency}</td>
			<td>{formatNumberToCurrencyFormat(props.transaction.amount, 2)}</td>
			<td>{formatNumberToCurrencyFormat(props.balance, 2)}</td>
		</tr>
	);
};

TransactionTableRow.propTypes = {
	transaction: PropTypes.object.isRequired,
	balance: PropTypes.number.isRequired,
};

export default TransactionTableRow;
