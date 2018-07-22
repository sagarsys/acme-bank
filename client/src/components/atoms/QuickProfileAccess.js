import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuickProfileAccess = (props) => (
	<div {...props}>
		<h2>
			<Link to='/profile' className="white-text" title="Go to my Profile">
				<blockquote>
					<i className="material-icons medium">person_pin</i>
					<p className="text-shadow">{props.username}</p>
				</blockquote>
			</Link>
		</h2>
	</div>
);

QuickProfileAccess.propTypes = {
	username: PropTypes.string.isRequired,
};

export default QuickProfileAccess;
