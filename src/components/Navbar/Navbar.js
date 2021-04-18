import React, { useContext } from 'react';
import logo from '../../img/yomith.png'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css'
import { AccountCircle } from '@material-ui/icons';
import { Avatar, Fab, Tooltip } from '@material-ui/core';
import { UserContext } from '../../App';
import HomeIcon from '../../img/home-5.png';
import orderlogo from '../../img/pngegg.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuContent: {

        textDecoration: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photo } = LoggedInUser;
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link to='/' className='logo-body'>
                                <img className="logo" src={logo} alt="" />
                                <p className="logo-text">
                                    Yomith
                                    <span className='logoColor'>
                                        Buy
                                    </span>
                                </p>
                            </Link>
                        </Typography>
                        <div className="navbar-icon">
                            <Link className="navbar-icon" to="/">
                                <Button color="inherit">
                                    <Avatar alt="image" src={HomeIcon} />
                                    Home
                            </Button>
                            </Link>

                            <Link className="navbar-icon" to="/orders">
                                <Button color="inherit">
                                    <Avatar alt="image" src={orderlogo} />
                                Orders
                            </Button>
                            </Link>

                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <Tooltip title="Admin" placement="top">
                                    <Fab color="primary">
                                        <AccountCircle />
                                    </Fab>
                                </Tooltip>
                            </Button>
                        </div>
                        <div className=''>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link className="menu-content" to="/editProduct">
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                </Link>
                                <Link className="menu-content" to="/manageProduct">
                                    <MenuItem onClick={handleClose}>
                                        ManageProduct
                                    </MenuItem>
                                </Link>
                                <Link className="menu-content" to="/addProduct">
                                    <MenuItem onClick={handleClose}>
                                        AddProduct
                                    </MenuItem>
                                </Link>
                                <Link className="menu-content" to="/">
                                    <MenuItem onClick={handleClose}>
                                        <Button onClick={() => setLoggedInUser({})}>
                                            Logout
                                        </Button>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </div>

                        <Link className="navbar-icon" to="/login">
                            <Button color="inherit">
                                <Tooltip title="Login" placement="top">
                                    <Fab color="primary">
                                        <Avatar alt="image" src={photo} />
                                    </Fab>
                                </Tooltip>
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};

export default Navbar;