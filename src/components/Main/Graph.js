import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import {Title} from './Title';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MFS = 'Positive State';
const CTS = 'Satisfactory State';
const TPS = 'Negative State';
const KS = 'Knock sensor';

const data02 = [
    {t: "00:00", [MFS]: 0.000185, [TPS]: 0.000185, [CTS]: 0.000185, [KS]: 0.00410},
    {t: "03:00", [MFS]: 0.000853, [TPS]:  0.00011, [CTS]: 0.000220, [KS]: 0.00530},
    {t: "07:00", [MFS]: 0.001372, [TPS]: 0.000236, [CTS]: 0.000330, [KS]: 0.00290},
    {t: "09:00", [MFS]: 0.001052, [TPS]: 0.000084, [CTS]: 0.000640, [KS]: 0.00240},
    {t: "13:00", [MFS]: 0.001013, [TPS]: 0.000132, [CTS]: 0.000420, [KS]: 0.00330},
    {t: "16:00", [MFS]: 0.000854, [TPS]: 0.000108, [CTS]: 0.000320, [KS]: 0.00160},
    {t: "18:00", [MFS]: 0.000861, [TPS]: 0.000136, [CTS]: 0.000250, [KS]: 0.00650},
    {t: "22:00", [MFS]: 0.002468, [TPS]: 0.000308, [CTS]: 0.000960, [KS]: 0.00310}
];

export const Graph = () => (
    <LineChart width={600} height={300} data={data02} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={MFS} stroke="#00CC00" />
        <Line type="monotone" dataKey={CTS} stroke="#FFD300" />
        <Line type="monotone" dataKey={TPS} stroke="#FF0000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="t" />
        <YAxis />
        <Tooltip />
    </LineChart>
);