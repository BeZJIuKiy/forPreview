import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {NavLink} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './Header.css';

import userAvatar from './profile.png';
import {SearcherObjects} from "./Searcher";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        zIndex: 3,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <NavLink className={'menu__btn'} to='/account'>My account</NavLink>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            {/* <AppBar position="static" color="red"> */}
            {/*<AppBar position="static" style={{background: '#0D0D30 '}}>*/}
            <AppBar position="static" style={{background: '#fff '}}>
                <Toolbar>
                    <NavLink className={'navButtonsHome'} to="/">
                        {"AI-Platform"}
                    </NavLink>

                    <div style={{color: "black"}}>Gas Fittings 01</div>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>

                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <NavLink to='/events'>
                                    {/*<NotificationsIcon className='header__icons'/>*/}
                                    <NotificationsIcon color={"action"}/>
                                </NavLink>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            // style={{background: "lightgray"}}
                        >
                            <img className='header_profile__icon'
                                 src={userAvatar} alt=""/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}