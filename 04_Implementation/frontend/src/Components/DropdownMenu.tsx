import React from 'react';
import Select, {
	components,
	OptionProps,
	SingleValueProps,
} from 'react-select';
import OptionsType from 'react-select';
import ValueType from 'react-select';

interface OptionType {
	label: string;
	value: string;
	logo: string;
}

// @ts-ignore
const options: OptionsType<OptionType> = [
	{ value: 'chocolate', label: 'Chocolate'},
	{ value: 'strawberry', label: 'Strawberry'},
	{ value: 'vanilla', label: 'Vanilla'}
];

// in this case we can not using ValueType<Shipping.CARRIER_OPTIONS> because added logo field
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const SingleValue = (singleValueProps: SingleValueProps<OptionType>) => {
const SingleValue = (singleValueProps: SingleValueProps<OptionType>) => {
	const {
		data: { label, value, logo }
	} = singleValueProps;

	return (
		<components.SingleValue {...singleValueProps}>
			<span className="d-flex align-items-center">
				{logo && <img height="45" width="45" src={logo} alt={value} />}
		  <span className="ml-2">{label} {':'} {value}</span>

			</span>
		</components.SingleValue>
	);
};


const Option = (optionProps: OptionProps<OptionType>) => {
	const { data } = optionProps;
	return (
		<components.Option {...optionProps}>
			<span className="d-flex align-items-center">
		  		<span className="ml-2">{data.value}</span>
			</span>
		</components.Option>
	);
};

export default class DropdownMenu extends React.Component {
	state = {
		selectedOption: null
	};

	// @ts-ignore
	handleChange = (selectedOption: ValueType<OptionType>) => {
		this.setState({ selectedOption }, () =>
			console.log(`Option selected:`, this.state.selectedOption)
		);
	};

	render() {
		const { selectedOption } = this.state;

		return (
			<Select
				value={selectedOption}
				onChange={this.handleChange}
				isSearchable={false}
				options={options}
				components={{ SingleValue, Option }}
			/>
		);
	}
}