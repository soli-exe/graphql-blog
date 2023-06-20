import { Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Paper
            style={{
                height: '3rem',
                width: '',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 'calc(100% + 20px)',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#678fb7'
            }}
        >
            <Toolbar>
                <Typography component="p" variant='p'>
                    Developed by SoliExE | All Rights Reserved &copy; 2023
                </Typography>
            </Toolbar>
        </Paper>
    )
}

export default Footer;