import React from 'react';
import {VisualizationSetting} from './VisualizationSetting';

export class VisualizationSettings extends React.Component {
	render() {
		return <div className='visualization-settings'>
			<h2>Visualization settings</h2>
			<VisualizationSetting/>
			<VisualizationSetting/>
			<VisualizationSetting/>
		</div>;
	}
}