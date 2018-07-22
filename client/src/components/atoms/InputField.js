import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e);
	}

	render() {
		const props = this.props;
		return (
			<input
				{...props}
				type={props.type}
				name={props.name}
				value={props.value}
				className={'validate'}
				onChange={this.handleChange}
			/>
		);
	}
}

InputField.propTypes = {
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string
};

export default InputField;
