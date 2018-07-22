import React from 'react';
import PropTypes from 'prop-types';

import Account from '../atoms/Account';

const Accounts = props => (
	<section className="accounts">
		<ul className="collection">
			{
				props.accounts && props.accounts.map((account) => (
					(account.status || props.edit) ?
						<Account
							key={account.number}
							account={account}
							view={props.view}
							edit={props.edit}
							floating={props.floating}
							onChange={props.onChange}
						/>
						:
						null
				))
			}
		</ul>
	</section>
);

Accounts.propTypes = {
	accounts: PropTypes.array.isRequired,
	edit: PropTypes.bool,
	view: PropTypes.bool,
	floating: PropTypes.bool,
	onChange: PropTypes.func
};

export default Accounts;
