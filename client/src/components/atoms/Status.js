import React from 'react';
import PropTypes from 'prop-types';
import StatusVisualIndicator from './StatusVisualIndicator';
import StatusSwitch from './StatusSwitch';

const Status = props => {
	return (props.view || !props.edit) ?
		(
			<div className="status" title="Account status">
				<span>{props.status ? 'Active' : 'Inactive' }</span>
				<StatusVisualIndicator status={props.status} />
			</div>
		)
		:
		(
			<div className="status" title="Toggle status">
				<StatusSwitch name={props.accountNumber} status={props.status} onChange={props.onChange} />
			</div>
		);
};


/**
 * Custom propType validator to check at least one required props validation
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error}
 */
const requiredPropsCheck = (props, propName, componentName) => {
	if (!props.edit && !props.view) {
		return new Error(`One of props 'edit' or 'view' is required by '${componentName}' component.`)
	}
	if (props[propName] && typeof (!!props[propName]) !== 'boolean') {
		return new Error(`${propName} must be of type 'boolean' in '${componentName}' component.`)
	}
};


Status.propTypes = {
	edit: requiredPropsCheck,
	view: requiredPropsCheck,
	status: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
	accountNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Status;
