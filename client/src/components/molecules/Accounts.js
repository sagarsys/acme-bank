import React from 'react';

import CollectionItem from '../atoms/CollectionItem';

export default (props) => (
	<section className="accounts" {...props}>
		<ul className="collection">
			<CollectionItem />
			<CollectionItem />
			<CollectionItem />
		</ul>
	</section>
);
