import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {

	constructor(props) {
		super(props);
		this.toggleChecked = this.toggleChecked.bind(this);
	}

	toggleChecked(e) {
		this.props.onChange(e);
	}

	render() {
		return (
			<input
				type="checkbox"
				name={this.props.name}
				checked={!!this.props.status}
				onChange={this.toggleChecked}
				{...this.props}
			/>
		);
	}
}

CheckBox.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default CheckBox;
