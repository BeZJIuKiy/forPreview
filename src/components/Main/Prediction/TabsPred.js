import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {mdiEngine} from '@mdi/js';
import Icon from "@mdi/react";
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import {Graph} from "../Graph";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {DevicesTablePred} from "./DevicesTablePred";
import {DateRangePred} from "./DateRangePred";

const EngineIcon = () => (
	<Icon path={mdiEngine}
		// title="User Profile"
		  size={1}
		// horizontal
		// vertical
		// rotate={90}
		// color="red"
		// spin
	/>
);

function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100% - 270px',
		backgroundColor: theme.palette.background.paper,
		margin: "4px 0px 0px 270px",
	},

	test: {
		background: "red",
	}
}));

// export default function ScrollableTabsButtonForce() {
export const TabsPred = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [object, setObject] = useState(<div/>);
	const [boxIsChecked, setChecked] = useState(false)

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeBox = (event) => setChecked(event.target.checked)

	useEffect((e) => {

			setObject(() => {
				return (
					<div style={{display: "flex", flexDirection: "column"}}>
						<div style={{display: "flex", justifyContent: "flex-end"}}>
							<DateRangePred/>
						</div>

						<div style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-end",
							marginTop: 20,
						}}>
							<div>
								<Button variant="contained" style={{marginBottom: 10, background: "#00CC66"}}>
									Hide prediction
								</Button>
							</div>
						</div>

						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<div>
								<div style={{
									display: "flex",
									justifyContent: "center",
								}}>
									<Graph/>
								</div>

								<FormControlLabel
									control={<Checkbox checked={boxIsChecked} onChange={handleChangeBox} name="checkedA"/>}
									label="SHOW PREDICTION"
								/>
							</div>

							<div style={{alignItems: "flex-end"}}>
								<DevicesTablePred/>
							</div>
						</div>
					</div>

				)
			})
		}
		, [value, boxIsChecked]);


	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="on"
					indicatorColor="primary"
					textColor="primary"
					aria-label="scrollable force tabs example"
				>
					<Tab label="Engine 01" icon={<EngineIcon/>} {...a11yProps(0)} />
					<Tab label="Engine 02" icon={<EngineIcon/>} {...a11yProps(1)} />
					<Tab label="Other" icon={<SettingsIcon/>} {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				{/*Engine 01*/}
				{object}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/*Engine 02*/}
				{object}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{/*Other*/}
				{object}
			</TabPanel>
		</div>
	);
}


// На всякий случай

//
// 	<Icon path={mdiEngine}
//     title="User Profile"
//     size={1}
//     horizontal
//     vertical
//     rotate={90}
//     color="red"
//     spin
// />

{/*<Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />*/
}
{/*<Tab label="Item Two" icon={<FavoriteIcon/>} {...a11yProps(1)} />*/
}
{/*<Tab label="Item Three" icon={<PersonPinIcon/>} {...a11yProps(2)} />*/
}
{/*<Tab label="Item Four" icon={<HelpIcon/>} {...a11yProps(3)} />*/
}
{/*<Tab label="Item Five" icon={<ShoppingBasket/>} {...a11yProps(4)} />*/
}
{/*<Tab label="Item Six" icon={<ThumbDown/>} {...a11yProps(5)} />*/
}
{/*<Tab label="Item Seven" icon={<ThumbUp/>} {...a11yProps(6)} />*/
}