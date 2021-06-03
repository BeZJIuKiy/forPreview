import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import {Title} from './Title';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Text} from 'recharts';

const MFS = 'Mass flow sensor';
const CTS = 'Coolant temperature sensor';
const KS = 'Knock sensor';

const MFS_PRED = 'PREDICATE: Mass flow sensor';
const CTS_PRED = 'PREDICATE: Coolant temperature sensor';
const KS_PRED = 'PREDICATE: Knock sensor';

const renderColorfulLegendText = (value, entry) => {
	const {color} = entry;

	return <span
		style={{color}}
		onClick={() => alert("Click!")}
	>
		{value}
	</span>;
};

// const data = [
// 	{t: "-04:00", [MFS]: 661, [CTS]: 390, [KS]: 640},
// 	{t: "-03:30", [MFS]: 685, [CTS]: 415, [KS]: 610},
// 	{t: "-03:00", [MFS]: 853, [CTS]: 220, [KS]: 530},
// 	{t: "-02:30", [MFS]: 1372, [CTS]: 330, [KS]: 290},
// 	{t: "-02:00", [MFS]: 1052, [CTS]: 640, [KS]: 240},
// 	{t: "-01:30", [MFS]: 1013, [CTS]: 420, [KS]: 330},
// 	{t: "-01:00", [MFS]: 854, [CTS]: 320, [KS]: 160},
// 	{t: "-00:30", [MFS]: 861, [CTS]: 250, [KS]: 450},
// 	{t: "00:00", [MFS]: 2468, [CTS]: 960, [KS]: 310},
// ];

const data = [
    {t: "-04:00", [MFS]: 185, [CTS]: 185, [KS]: 410, [MFS_PRED]: 185 + 10, [CTS_PRED]: 185 - 12 , [KS_PRED]: 410 + 40},
    {t: "-03:30", [MFS]: 853, [CTS]: 220, [KS]: 530, [MFS_PRED]: 853 + 43, [CTS_PRED]: 220 + 20, [KS_PRED]: 530 - 41},
    {t: "-03:00", [MFS]: 1372, [CTS]: 330, [KS]: 290, [MFS_PRED]: 1372 - 90, [CTS_PRED]: 330 - 21 , [KS_PRED]: 290 + 21 },
    {t: "-02:30", [MFS]: 1052, [CTS]: 640, [KS]: 240, [MFS_PRED]: 1052 + 115, [CTS_PRED]: 640 + 36, [KS_PRED]: 240 + 2},
    {t: "-02:00", [MFS]: 1013, [CTS]: 420, [KS]: 330, [MFS_PRED]: 1013 - 69 , [CTS_PRED]: 420 - 14 , [KS_PRED]: 330 - 26},
    {t: "-01:30", [MFS]: 854, [CTS]: 320, [KS]: 160, [MFS_PRED]: 854 + 61, [CTS_PRED]: 320 + 23, [KS_PRED]: 160 + 6},
    {t: "-01:00", [MFS]: 861, [CTS]: 250, [KS]: 450, [MFS_PRED]: 861, [CTS_PRED]: 250 + 3, [KS_PRED]: 450 - 39},
    {t: "-00:30", [MFS]: 2468, [CTS]: 960, [KS]: 310, [MFS_PRED]: 2468 - 196, [CTS_PRED]: 960 - 56, [KS_PRED]: 310 + 21},
    {t: "00:00", [MFS]: 2230, [CTS]: 650, [KS]: 413, [MFS_PRED]: 2230 + 131, [CTS_PRED]: 650 - 49, [KS_PRED]: 413 + 15},
];

// const data02 = [
//     {t: "00:00", [MFS_PRED]: 2468 - 196,    [CTS_PRED]: 960 - 56,   [KS_PRED]: 310 + 21},
//     {t: "+01:00", [MFS_PRED]: 861,           [CTS_PRED]: 250 + 3,    [KS_PRED]: 450 - 39},
//     {t: "+02:00", [MFS_PRED]: 854 + 61,      [CTS_PRED]: 320 + 23,   [KS_PRED]: 160 + 6},
//     {t: "+03:00", [MFS_PRED]: 1013 - 69 ,    [CTS_PRED]: 420 - 14 ,  [KS_PRED]: 330 - 26},
//     {t: "+04:00", [MFS_PRED]: 1052 + 115,    [CTS_PRED]: 640 + 36,   [KS_PRED]: 240 + 2},
//     {t: "+05:00", [MFS_PRED]: 1372 - 90,     [CTS_PRED]: 330 - 21 ,  [KS_PRED]: 290 + 21 },
//     {t: "+06:00", [MFS_PRED]: 853 + 43,      [CTS_PRED]: 220 + 20,   [KS_PRED]: 530 - 41},
//     {t: "+07:00", [MFS_PRED]: 685 + 10,      [CTS_PRED]: 415 - 12 ,  [KS_PRED]: 610 + 40},
// ];

export const Graph_02 = () => (
	<LineChart
		label={"123"}
		width={3116}
		height={600}
		data={data}
		margin={{top: -20, right: 20, bottom: 5, left: 0}}
	>
		<Line type="monotone" dataKey={MFS} stroke="#F08080" />
		<Line type="monotone" dataKey={MFS_PRED} stroke="#DC143C" />
		{/*<Line type="monotone" dataKey={MFS} stroke="#DC143C"/>*/}

		<Line type="monotone" dataKey={CTS} stroke="#FF8C00" />
		<Line type="monotone" dataKey={CTS_PRED} stroke="#FFD700" />
		{/*<Line type="monotone" dataKey={CTS} stroke="#FFD700"/>*/}

		<Line type="monotone" dataKey={KS} stroke="#ADD8E6" />
		<Line type="monotone" dataKey={KS_PRED} stroke="#4169E1" />
		{/*<Line type="monotone" dataKey={KS} stroke="#4169E1"/>*/}
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
		<XAxis dataKey="t"/>
		<YAxis/>
		<Legend
			align={'left'}
			verticalAlign={'top'}
			wrapperStyle={{
				fontSize: 24,
				top: -30,
				left: 60,
			}}
			iconType={"circle"}

			formatter={renderColorfulLegendText}/>
		<Tooltip/>
	</LineChart>
);