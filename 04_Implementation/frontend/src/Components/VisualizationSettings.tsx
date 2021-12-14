import React from 'react';
import DropdownMenu from './DropdownMenu';

export class VisualizationSettings extends React.Component {
	render() {
		return <div className='visualization-settings'>
			<h2>Visualization settings</h2>
			<DropdownMenu/>
		</div>;
	}
}