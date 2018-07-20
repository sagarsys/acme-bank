import React from 'react';
import { formatNumberToCurrencyFormat } from '../../helpers/utilities';

export default (props) => (
	<li className="collection-item avatar" {...props}>
		<i className="material-icons white-text circle">account_balance</i>
		<p className="title account-type" title="Account type">{props.account.type.toUpperCase()} Accounts</p>
		<p className="flow-text account-balance">
			<span title="Account Balance">
				{
					props.account.currency === 'EUR' ?
					(
						<i className="material-icons">euro_symbol</i>
					)
						:
					<span>{props.account.currency}</span>
				}
				<span>{formatNumberToCurrencyFormat(props.account.balance, 2)}</span>
				<br />
			</span>
			<small className="account-num" title="Account Number">
				<strong>Account Number: </strong>{props.account.number}
			</small>
		</p>
		{
			(!props['data-edit'] && !props['data-view'] && props.account.status) ?
				(
					<a href="#!" className="secondary-content btn-floating btn-large waves-effect waves-light secondary" title="View Transactions">
						<i className="material-icons">add</i>
					</a>
				)
			:
				null
		}
		{
			!props['data-edit'] || props['data-view'] ?
				(
					<div className="status" title="Account status">
						<span>{props.account.status ? 'Active' : 'Inactive' }</span>
						{
							props.account.status ?
								<span className="circle status-circle green"> </span>
							:
								<span className="circle status-circle red"> </span>
						}
					</div>
				)
			:
			(
				<div className="status" title="Toggle status">
					<div className="switch">
						<label>
							Inactive
							<input type="checkbox" checked={!!props.account.status}/>
							<span className="lever"> </span>
							Active
						</label>
					</div>
					{
						props.account.status ?
							<span className="circle status-circle green"> </span>
							:
							<span className="circle status-circle red"> </span>
					}
				</div>
			)
		}
	</li>
);
