import React from 'react'
import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import useStyles from './styles';
import logo from '../../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import picture from '../../assets/picture.jpg';

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={6} >
        <div>
            
            <img src={picture} alt="I Grew It .com" height="450" width="1050px" className={classes.image} align="center"/>
            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" >Welcome to I Grew It.com where all your beard dreams come true!</Box>
        </div>
        </Grid>
    )
};

export default Home
