import React from 'react';

import Account from '../atoms/Account';

export default (props) => (
	<section {...props} className="accounts">
		<ul className="collection">
			<Account data-edit={true} />
			<Account />
			<Account />
		</ul>
	</section>
);
