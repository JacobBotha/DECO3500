import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default class NewsletterBar extends Component {
    render () {
        return (
        <AppBar style={{background: "#F9F9F9"}} position="static">
            <img src="/icons/fambridge.svg" alt="Fambridge" style={{position: "absolute", left:"5px", top: "5px", width: "100px", height: "auto"}}></img>
            <Toolbar style={{ 
                float       : 'none', 
                width       : '200px',
                marginLeft  : 'auto',
                marginRight : 'auto',
            }}>
            <Typography variant="h6" component="div" color="common.black" sx={{ flexGrow: 1}} position="centred">
                Newsletter
            </Typography>
            </Toolbar>
        </AppBar>)
    }
}