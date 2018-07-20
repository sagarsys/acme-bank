import React from 'react';

import Account from '../atoms/Account';

export default (props) => (
	<section {...props} className="accounts">
		<ul className="collection">
			{props.user.accounts && props.user.accounts.map((account) => (
				account.status ? <Account key={account.number} account={account} /> : null
			))}
		</ul>
	</section>
);
