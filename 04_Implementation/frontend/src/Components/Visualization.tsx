// import * as d3 from 'd3';
import React, {RefObject} from "react";
// import {count, DSVRowArray} from "d3";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from 'moment';

const dateFormatter = (item: moment.MomentInput) => moment(item).format("MMM YY");

export class Visualization extends React.Component {
    private myRef: RefObject<HTMLDivElement>;
    private dataset;

    constructor(props: {}) {
        super(props);
        this.myRef = React.createRef();
        this.dataset = [100, 200, 300, 400, 500];

    }

    componentDidMount() {
        // let size = 500;
        // let svg = d3.select(this.myRef.current)
        //     .append('svg')
        //     .attr('width', size)
        //     .attr('height', size);
        //
        // let rect_width = 95;
        // svg.selectAll('rect')
        //     .data(this.dataset)
        //     .enter()
        //     .append('rect')
        //     .attr('x', (d, i) => 5 + i*(rect_width + 5))
        //     .attr('y', d => size - d)
        //     .attr('width', rect_width)
        //     .attr('height', d => d)
        //     .attr('fill', 'teal');


    }
    
    

    render() {
        const data = [
            {category: "2019-01-01T00:00:00.000", x: "2019-01-01T00:00:00.000", count: 155},
            {category: "2019-02-01T00:00:00.000", x: "2019-02-01T00:00:00.000", count: 127},
            {category: "2019-03-01T00:00:00.000", x: "2019-03-01T00:00:00.000", count: 214},
            {category: "2019-04-01T00:00:00.000", x: "2019-04-01T00:00:00.000", count: 164},
            {category: "2019-05-01T00:00:00.000", x: "2019-05-01T00:00:00.000", count: 180},
            {category: "2019-06-01T00:00:00.000", x: "2019-06-01T00:00:00.000", count: 234},
            {category: "2019-07-01T00:00:00.000", x: "2019-07-01T00:00:00.000", count: 180},
            {category: "2019-08-01T00:00:00.000", x: "2019-08-01T00:00:00.000", count: 160},
            {category: "2019-09-01T00:00:00.000", x: "2019-09-01T00:00:00.000", count: 143},
            {category: "2019-10-01T00:00:00.000", x: "2019-10-01T00:00:00.000", count: 153},
            {category: "2019-11-01T00:00:00.000", x: "2019-11-01T00:00:00.000", count: 153},
            {category: "2019-12-01T00:00:00.000", x: "2019-12-01T00:00:00.000", count: 189},
            {category: "2020-01-01T00:00:00.000", x: "2020-01-01T00:00:00.000", count: 181},
            {category: "2020-02-01T00:00:00.000", x: "2020-02-01T00:00:00.000", count: 206},
            {category: "2020-03-01T00:00:00.000", x: "2020-03-01T00:00:00.000", count: 137},
            {category: "2020-04-01T00:00:00.000", x: "2020-04-01T00:00:00.000", count: 133},
            {category: "2020-05-01T00:00:00.000", x: "2020-05-01T00:00:00.000", count: 159},
            {category: "2020-06-01T00:00:00.000", x: "2020-06-01T00:00:00.000", count: 164},
            {category: "2020-07-01T00:00:00.000", x: "2020-07-01T00:00:00.000", count: 172},
            {category: "2020-08-01T00:00:00.000", x: "2020-08-01T00:00:00.000", count: 204},
            {category: "2020-09-01T00:00:00.000", x: "2020-09-01T00:00:00.000", count: 164},
            {category: "2020-10-01T00:00:00.000", x: "2020-10-01T00:00:00.000", count: 199},
            {category: "2020-11-01T00:00:00.000", x: "2020-11-01T00:00:00.000", count: 174},
            {category: "2020-12-01T00:00:00.000", x: "2020-12-01T00:00:00.000", count: 150},
        ];
        
        
        
        return <div className='visualization'>
            <h2>Visualization</h2>
            <div ref={this.myRef}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="x" tickFormatter={dateFormatter} />
                        <YAxis />
                        <Tooltip labelFormatter={dateFormatter} />
                        <Bar dataKey="count" fill="rgba(106, 110, 229)" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
            {/*<BarChart/>*/}
            {/*<img src='https://i.ibb.co/DGnv0zZ/image.png' alt='visImage' className='vis-image'/>*/}
        </div>;
    }


    private exampleData = () => {
        return [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A Label",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B Label",
                        "value": 0
                    },
                    {
                        "label": "C Label",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D Label",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E Label",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F Label",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G Label",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H Label",
                        "value": -5.1387322875705
                    }
                ]
            }
        ]

    }
}