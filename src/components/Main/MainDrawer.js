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


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
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
        zIndex: -1,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nestedGood: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
        background: "linear-gradient(to right, #67E667, #00CC00)",
    },

    nestedWarning: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
        background: "linear-gradient(to right, #FFE773, #FFD300)",
    },

    nestedReplace: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(0),
        background: "linear-gradient(to right, #FF0000, #FF7373)",
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
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    // subheader={
                    //     <ListSubheader component="div" id="nested-list-subheader">
                    //         Nested List Items
                    //     </ListSubheader>
                    // }
                    className={classes.root}
                >
                    {/*<ListItem button>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <SendIcon/>*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary="Sent mail"/>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem button>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <DraftsIcon/>*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary="Drafts"/>*/}
                    {/*</ListItem>*/}
                    <ListItem>
                        <SearcherObjects />
                    </ListItem>

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <DirectionsBoatIcon style={{color: "black", fontSize: "36px"}}/>
                        </ListItemIcon>
                        <div className={classes.root}>
                            <ListItemText primary="Object 01"/>
                            <div>
                                <ListItemIcon style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}>
                                    <GpsFixedIcon
                                        color={"action"}
                                        onClick={() => alert('GpsFixedIcon')}
                                    />

                                    <TrendingUpIcon
                                        color={"action"}
                                        onClick={() => alert('TrendingUpIcon')}
                                    />

                                    <AssessmentOutlinedIcon
                                        color={"action"}
                                        onClick={() => alert('AssessmentOutlinedIcon')}
                                    />
                                </ListItemIcon>
                            </div>
                        </div>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nestedGood}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Engine work"/>
                                    <ListItemText secondary={"Total State: 88%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 10px"}}>
                                    <Badge badgeContent={1} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>

                            <ListItem button className={classes.nestedWarning}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Fuel sensor"/>
                                    <ListItemText secondary={"Total State: 58%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 10px"}}>
                                    <Badge badgeContent={3} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>

                            <ListItem button className={classes.nestedReplace}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Oxygen sensor"/>
                                    <ListItemText secondary={"Total State: 26%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 5px"}}>
                                    <Badge badgeContent={19} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClick2}>
                        <ListItemIcon>
                            <CommuteIcon style={{color: "black", fontSize: "36px"}}/>
                        </ListItemIcon>
                        <div className={classes.root}>
                            <ListItemText primary="Object 02"/>
                            <div>
                                <ListItemIcon style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}>
                                    <GpsFixedIcon
                                        color={"action"}
                                        onClick={() => alert('GpsFixedIcon')}
                                    />

                                    <TrendingUpIcon
                                        color={"action"}
                                        onClick={() => alert('TrendingUpIcon')}
                                    />

                                    <AssessmentOutlinedIcon
                                        color={"action"}
                                        onClick={() => alert('AssessmentOutlinedIcon')}
                                    />
                                </ListItemIcon>
                            </div>
                        </div>
                        {open2 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nestedGood}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Engine work"/>
                                    <ListItemText secondary={"Total State: 88%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 10px"}}>
                                    <Badge badgeContent={1} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>

                            <ListItem button className={classes.nestedWarning}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Fuel sensor"/>
                                    <ListItemText secondary={"Total State: 58%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 10px"}}>
                                    <Badge badgeContent={3} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>

                            <ListItem button className={classes.nestedReplace}>
                                <ListItemIcon>
                                    <BuildIcon color={"action"}/>
                                </ListItemIcon>

                                <div>
                                    <ListItemText primary="Oxygen sensor"/>
                                    <ListItemText secondary={"Total State: 26%"}/>
                                </div>

                                <IconButton color="inherit" style={{padding: "0px 0px 0px 5px"}}>
                                    <Badge badgeContent={19} color="secondary">
                                        <NavLink to='/events'>
                                            <NotificationsIcon className='header__icons'/>
                                        </NavLink>
                                    </Badge>
                                </IconButton>
                            </ListItem>
                        </List>
                    </Collapse>


                </List>
            </div>
        </Drawer>
    )
}