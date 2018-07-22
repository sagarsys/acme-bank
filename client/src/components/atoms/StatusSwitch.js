import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import StatusVisualIndicator from './StatusVisualIndicator';

const StatusSwitch = props => (
	<div className="status-switch">
		<div className="switch">
			<label>
				Inactive
				<CheckBox
					name={`switch_${props.name}`}
					checked={props.status}
					onChange={props.onChange}
				/>
				<span className="lever"> </span>
				Active
			</label>
		</div>
		<StatusVisualIndicator status={props.status} />
	</div>
);

StatusSwitch.propTypes = {
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	status: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default StatusSwitch;
