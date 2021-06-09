import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import {useRef} from "react";

const useStyles = makeStyles((theme) => ({
	test: {
		background: "red",
		fontSize: 42,
		// top: 0,
		// padding: 0,
	}
}));

export const DateRangePred = () => {
	const [value, setValue] = React.useState([null, null]);
	const startText = "First dates";
	const classes = useStyles();
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateRangePicker

				// startText="First date"
				startText={startText}
				endText="Last date"
				calendars={3}
				value={value}

				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(startProps, endProps) => {
					return (
						<div style={{display: "flex",}}>
							<TextField {...startProps} inputProps={{style: {fontSize: 28}}} />
							<Box sx={{mx: 2}}> to </Box>
							<TextField {...endProps} />
						</div>

						// <React.Fragment>
						// 	<TextField style={{paddingRight: 0}} {...startProps} />
						// 	<Box sx={{ mx: 2 }}> to </Box>
						// 	<TextField {...endProps} />
						// </React.Fragment>
					)
				}}
			/>
		</LocalizationProvider>
	);
}