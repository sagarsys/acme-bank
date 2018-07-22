import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../atoms/InputField';

const Input = props => {
	return (
		<div className={props.wrapperclass ? props.wrapperclass + " input-field" : "input-field"} >
			<i className="material-icons prefix">{props.icon}</i>
			<InputField name={props.name} type={props.type} onChange={props.onChange} {...props} />
			<label htmlFor={props.name}>{props.label}</label>
			<span className="helper-text"
			      data-error={props.error}
			      data-success={props.success}
			> </span>
		</div>
	);
};

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string,
	error: PropTypes.string,
	success: PropTypes.string,
	wrapperclass: PropTypes.string,
};

export default Input;
