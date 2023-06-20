import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Link to={'/'} style={{ textDecoration: "none", width: "100%" }} >
                        <Typography variant='h5' component='h1' flex={1} fontWeight='bold' color="text.primary">
                            SoliExE Blog
                        </Typography>
                    </Link>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header