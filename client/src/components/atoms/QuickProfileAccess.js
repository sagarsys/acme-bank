import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
	<div {...props}>
		<h2>
			<Link to='/profile' className="white-text" title="Go to my Profile">
				<blockquote>
					<i className="material-icons medium">person_pin</i>
					<p className="text-shadow">{props.user.name}</p>
				</blockquote>
			</Link>
		</h2>
	</div>
);
