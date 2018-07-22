import React from 'react';
import { DEPOSIT_TRANSACTION } from '../../actions/types';

import TransactionTableRow from './TransactionTableRow';

export default (props) => {
	let balance = 0;
	return (
		<table className="centered responsive-table">
			<thead>
			<tr>
				<th>TRANSACTION ID</th>
				<th>DATE</th>
				<th>TYPE</th>
				<th>CURRENCY</th>
				<th>AMOUNT</th>
				<th>BALANCE</th>
			</tr>
			</thead>

			<tbody>
			{
				props.account.transactions.map((t) => {
					(t.type === DEPOSIT_TRANSACTION) ?
						balance += t.amount
					:
						balance -= t.amount
					;
					return (
						<TransactionTableRow transaction={t} balance={balance} />
					);
				})
			}
			</tbody>
		</table>
	);
};
