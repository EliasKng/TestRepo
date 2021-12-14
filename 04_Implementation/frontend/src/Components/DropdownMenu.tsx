import React, {Component, Fragment} from 'react';
import Select from 'react-select';
import {colourOptions} from './data/data';

interface State {
	readonly isClearable: boolean;
	readonly isDisabled: boolean;
	readonly isLoading: boolean;
	readonly isRtl: boolean;
	readonly isSearchable: boolean;
}

export interface SelectOption {
	readonly value: string;
	readonly label: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

export default class SingleSelect extends Component<Record<string, unknown>, State> {
	state: State = {
		isClearable: true,
		isDisabled: false,
		isLoading: false,
		isRtl: false,
		isSearchable: true,
	};

	render() {
		const {isClearable, isSearchable, isDisabled, isLoading, isRtl} =
			this.state;
		return (
			<Fragment>
				<Select
					className="dropdown-basic-single"
					classNamePrefix="select"
					defaultValue={colourOptions[0]}
					isDisabled={isDisabled}
					isLoading={isLoading}
					isClearable={isClearable}
					isRtl={isRtl}
					isSearchable={isSearchable}
					name="color"
					options={colourOptions}
				/>
			</Fragment>
		);
	}
}