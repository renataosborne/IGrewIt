import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart, Assignment} from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
       
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/home" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="I Grew It.com" height="45px" className={classes.image}/> 
                        IGrewIt.com - Home
                    </Typography>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        Shop
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname==='/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Typography>See cart items---</Typography>
                            <Badge badgeContent={totalItems} color="secondary"></Badge>
                                <ShoppingCart />
                        </IconButton>
                   
                    </div> )}
                   
                </Toolbar>
            </AppBar>     
        </div>
    )
}

export default Navbar
