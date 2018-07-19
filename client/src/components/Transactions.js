import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AccountTransaction from './molecules/AccountTransaction';

class Transactions extends Component {
	render() {
		return (
			<section className="transactions">
				<h1>Transactions</h1>
				<p className="flow-text">You can find a list of the deposits and/or withdrawals made to your active account(s) here.</p>
				<ul className="collapsible popout">
					<AccountTransaction />
					<AccountTransaction className="active" />
					<AccountTransaction />
				</ul>
			</section>
		);
	}
}

Transactions.propTypes = {};

export default Transactions;
