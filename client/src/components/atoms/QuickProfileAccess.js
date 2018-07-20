import React from 'react';

export default (props) => (
	<div {...props}>
		<h2>
			<a href="" className="white-text" title="Go to my Profile">
				<blockquote>
					<i className="material-icons medium">person_pin</i>
					<p className="text-shadow">{props.user.name}</p>
				</blockquote>
			</a>
		</h2>
	</div>
);
