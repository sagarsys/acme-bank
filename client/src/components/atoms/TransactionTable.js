import React from 'react';

export default (props) => {
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
			<tr>
				<td>0</td>
				<td>16-08-2016</td>
				<td>DEPOSIT</td>
				<td>EUR</td>
				<td>1000</td>
				<td>1000</td>
			</tr>
			<tr>
				<td>1</td>
				<td>16-08-2016</td>
				<td>DEPOSIT</td>
				<td>EUR</td>
				<td>1000</td>
				<td>1000</td>
			</tr>
			<tr>
				<td>2</td>
				<td>16-08-2016</td>
				<td>DEPOSIT</td>
				<td>EUR</td>
				<td>1000</td>
				<td>1000</td>
			</tr>
			</tbody>
		</table>
	);
};
