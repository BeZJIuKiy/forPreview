import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CommuteIcon from '@material-ui/icons/Commute';
import BuildIcon from '@material-ui/icons/Build';
import Badge from "@material-ui/core/Badge";
import {NavLink} from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import {SearcherObjects} from "./Searcher";
import {CustomizedProgressBars} from "./ProgressBar";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        width: '100%',
        maxWidth: 360,
    },

    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth,
        height: "80vh",
        top: "76px",
        left: "8px",
        zIndex: 1,

        // borderLeft: "2px solid #e5e5e5"
    },

    drawerContainer: {
        overflow: 'auto',
    },

    nestedGood: {
        padding: 0,
        margin: 0,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
        // background: "linear-gradient(to right, #67E667, #00CC00)",
    },

    nestedWarning: {
        padding: 0,
        margin: 0,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
    },

    nestedReplace: {
        padding: 0,
        margin: 0,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
    },
}));

export const MainDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <AssessmentOutlinedIcon color={"action"} />
                        </ListItemIcon>
                        <div className={classes.root}>
                            <ListItemText primary="Prediction / Current data" />
                        </div>
                    </ListItem>

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <VolumeUpIcon color={"action"} />
                        </ListItemIcon>
                        <div className={classes.root}>
                            <ListItemText primary="Audio Sensor" />
                        </div>
                    </ListItem>
                </List>
            </div>
        </Drawer>


    )
}