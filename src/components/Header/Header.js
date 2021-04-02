import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import logo from '../../img/yomith.png'
import './Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    secondary: {
        main: '#f44336',
    },
    title: {
        flexGrow: 1,
    },
}));
const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            <img className="logo" src={logo} alt="" />

                            <Button color="inherit"><p>Yomith<span className="title"> Buy</span></p></Button>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Button color="inherit"><Link to="/"></Link>Home</Button>
                            <Button color="inherit">Orders</Button>
                            <Button color="inherit">admin</Button>
                            <Button color="inherit">Deals</Button>

                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};

export default Header;