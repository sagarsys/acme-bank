import React from 'react';

export default (props) => (
	<li className="collection-item avatar" {...props}>
		<i className="material-icons white-text circle">account_balance</i>
		<p className="title account-type" title="Account type">Saving Accounts</p>
		<p className="flow-text account-balance">
			<span title="Account Balance">
				<i className="material-icons">euro_symbol</i>2,000
				<br />
			</span>
			<small className="account-num" title="Account Number">
				<strong>Account Number: </strong>091823746
			</small>
		</p>
		<a href="#!" className="secondary-content btn-floating btn-large waves-effect waves-light secondary" title="View Transactions">
			<i className="material-icons">add</i>
		</a>
		<div className="status" title="Account status">
			<span>Active</span>
			<span className="circle status-circle green"> </span>
			{/*<span className="circle status-circle red"> </span>*/}
		</div>
	</li>
);