import React from 'react';

export default (props) => (
	<div {...props} className={props.className ? props.className + " input-field" : "input-field"} >
		<i className="material-icons prefix">{props.icon}</i>
		<input
			type={props.type}
			name={props.name}
			required={props.required}
			value={props.value}
			pattern={props.pattern}
			readOnly={props.readonly}
			disabled={props.disabled}
			max={props.max}
			className="validate"
		/>
		<label htmlFor={props.name}>{props.label}</label>
		<span className="helper-text" data-error={props['data-error']}> </span>
	</div>
);
