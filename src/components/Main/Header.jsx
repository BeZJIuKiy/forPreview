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
import './Header.css';

export const userAvatar = 'https://img-premium.flaticon.com/png/512/3135/3135715.png?token=exp=1621712838~hmac=70a2b0f58c98e43a22a273ffa28475cf';

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
            {/*<AppBar position="static" style={{background: '#5f5f5f'}}>*/}
            <AppBar position="static" style={{background: '#0D0D30 '}}>
                <Toolbar>
                    <NavLink className={'navButtonsHome'} to="/">
                        {"AI-Platform"}
                    </NavLink>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>

                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={5} color="secondary">
                                <NavLink to='/events'>
                                    <NotificationsIcon className='header__icons'/>
                                </NavLink>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
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