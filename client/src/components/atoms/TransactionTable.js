import React from 'react';

import { formatNumberToCurrencyFormat } from '../../helpers/utilities';
import { DEPOSIT_TRANSACTION } from '../../actions/types';

export default (props) => {
	let balance = 0;
	return (
		<table className="centered responsive-table">
			<thead>
			<tr>
				<th>ID</th>
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
						<tr key={t.id}>
							<td>{t.id}</td>
							<td>{t.date}</td>
							<td>{t.type.toUpperCase()}</td>
							<td>{t.currency}</td>
							<td>{formatNumberToCurrencyFormat(t.amount, 2)}</td>
							<td>{formatNumberToCurrencyFormat(balance, 2)}</td>
						</tr>
					);
				})
			}
			</tbody>
		</table>
	);
};
