import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';

export const DateRangeR = () => {
	const [value, setValue] = React.useState([null, null]);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateRangePicker
				startText="First date"
				endText="Last date"
				calendars={3}
				value={value}

				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(startProps, endProps) => (
					<React.Fragment>
						<TextField {...startProps} />
						<Box sx={{ mx: 2 }}> to </Box>
						<TextField {...endProps} />
					</React.Fragment>
				)}
			/>
		</LocalizationProvider>
	);
}