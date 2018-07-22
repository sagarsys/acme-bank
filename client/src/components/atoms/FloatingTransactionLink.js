import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FloatingTransactionLink = (props) => {
	return props.floating ?
		(
			<Link to={`/transactions/${props.accountNumber}`}
			      className="secondary-content btn-floating btn-large waves-effect waves-light secondary"
			      title="View Transactions"
			>
				<i className="material-icons">add</i>
			</Link>
		)
		:
		null
};

FloatingTransactionLink.propTypes = {
	status: PropTypes.bool,
	floating: PropTypes.bool,
	accountNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FloatingTransactionLink;
