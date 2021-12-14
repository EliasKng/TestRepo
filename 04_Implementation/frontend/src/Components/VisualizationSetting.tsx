import React from 'react';
import DropdownMenu from './DropdownMenu';

export class VisualizationSetting extends React.Component {
	render() {
		return <div className='visualization-setting'>
			<h3>y-Axis</h3>
			<DropdownMenu/>
		</div>;
	}
}