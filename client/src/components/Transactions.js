import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OK_STATUS } from '../actions/types';
import { redirectUser } from '../actions/loginActions';

import AccountTransaction from './molecules/AccountTransaction';

class Transactions extends Component {
	constructor(props) {
		super(props);
		this.defaultActiveAccount = null;
		if (props.match.params.accountNumber) {
			this.defaultActiveAccount = parseInt(props.match.params.accountNumber, 10);
		}
	}

	componentDidMount() {
		const props = this.props;
		if (props.status && props.status !== OK_STATUS) {
			// redirect to login
			props.redirectUser();
			return;
		}
		window.M && window.M.Collapsible.init(document.querySelectorAll('.collapsible'), null);
	}

	render() {
		const props = this.props;
		if (props.status !== OK_STATUS) return null;
		return (
			<section className="transactions">
				<h1>Transactions</h1>
				<p className="flow-text">You can find a list of the deposits and/or withdrawals made to your active account(s) here.</p>
				<ul className="collapsible popout">
					{
						props.user.accounts && props.user.accounts.map((account, i) => {
							if (i === 0 && !this.defaultActiveAccount) this.defaultActiveAccount = account.number;
							return (
								<AccountTransaction
									key={account.number}
									account={account}
									className={this.defaultActiveAccount === account.number ? 'active' : null}
								/>
							);
						})
					}
				</ul>
			</section>
		);
	}
}

Transactions.propTypes = {
	status: PropTypes.number,
	user: PropTypes.object,
	redirectUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	user: state.login.user,
	status: state.login.status
});

export default withRouter(connect(mapStateToProps, { redirectUser })(Transactions));
