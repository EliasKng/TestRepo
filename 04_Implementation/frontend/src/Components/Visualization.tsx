import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import moment from 'moment';
import React from 'react';

const dateFormatter = (item: moment.MomentInput) => moment(item).format('MMM YY');

export class Visualization extends React.Component {
	render() {
		const data = [
			{category: '2019-01-01T00:00:00.000', x: '2019-01-01T00:00:00.000', count: 155},
			{category: '2019-02-01T00:00:00.000', x: '2019-02-01T00:00:00.000', count: 127},
			{category: '2019-03-01T00:00:00.000', x: '2019-03-01T00:00:00.000', count: 214},
			{category: '2019-04-01T00:00:00.000', x: '2019-04-01T00:00:00.000', count: 164},
			{category: '2019-05-01T00:00:00.000', x: '2019-05-01T00:00:00.000', count: 180},
			{category: '2019-06-01T00:00:00.000', x: '2019-06-01T00:00:00.000', count: 234},
			{category: '2019-07-01T00:00:00.000', x: '2019-07-01T00:00:00.000', count: 180},
			{category: '2019-08-01T00:00:00.000', x: '2019-08-01T00:00:00.000', count: 160},
			{category: '2019-09-01T00:00:00.000', x: '2019-09-01T00:00:00.000', count: 143},
			{category: '2019-10-01T00:00:00.000', x: '2019-10-01T00:00:00.000', count: 153},
			{category: '2019-11-01T00:00:00.000', x: '2019-11-01T00:00:00.000', count: 153},
			{category: '2019-12-01T00:00:00.000', x: '2019-12-01T00:00:00.000', count: 189},
			{category: '2020-01-01T00:00:00.000', x: '2020-01-01T00:00:00.000', count: 181},
			{category: '2020-02-01T00:00:00.000', x: '2020-02-01T00:00:00.000', count: 206},
			{category: '2020-03-01T00:00:00.000', x: '2020-03-01T00:00:00.000', count: 137},
			{category: '2020-04-01T00:00:00.000', x: '2020-04-01T00:00:00.000', count: 133},
			{category: '2020-05-01T00:00:00.000', x: '2020-05-01T00:00:00.000', count: 159},
			{category: '2020-06-01T00:00:00.000', x: '2020-06-01T00:00:00.000', count: 164},
			{category: '2020-07-01T00:00:00.000', x: '2020-07-01T00:00:00.000', count: 172},
			{category: '2020-08-01T00:00:00.000', x: '2020-08-01T00:00:00.000', count: 204},
			{category: '2020-09-01T00:00:00.000', x: '2020-09-01T00:00:00.000', count: 164},
			{category: '2020-10-01T00:00:00.000', x: '2020-10-01T00:00:00.000', count: 199},
			{category: '2020-11-01T00:00:00.000', x: '2020-11-01T00:00:00.000', count: 174},
			{category: '2020-12-01T00:00:00.000', x: '2020-12-01T00:00:00.000', count: 150},
		];

		return <div className='visualization'>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<XAxis dataKey="x" tickFormatter={dateFormatter}/>
					<YAxis/>
					<Tooltip labelFormatter={dateFormatter}/>
					<Bar dataKey="count" fill="rgba(106, 110, 229)"/>
				</BarChart>
			</ResponsiveContainer>
		</div>;
	}
}