import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AccountTransaction from './molecules/AccountTransaction';

class Transactions extends Component {
	render() {
		return (
			<section className="transactions">
				<h1>Transactions</h1>
				<p className="flow-text">You can find a list of the deposits and/or withdrawals made to your active account(s) here.</p>
				<ul className="collapsible popout">
					{this.props.user.accounts && this.props.user.accounts.map((account) => (
						<AccountTransaction key={account.number} account={account} />
					))}
				</ul>
			</section>
		);
	}
}

Transactions.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	user: state.login.user
});

export default connect(mapStateToProps)(Transactions);
