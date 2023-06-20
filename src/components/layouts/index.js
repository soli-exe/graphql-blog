import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/material'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth={false} sx={{ position: 'relative', minHeight: '100vh', backgroundColor: 'background.default' }}>
                <>
                    {children}
                </>
                <Footer />
            </Container>
        </>
    )
}

export default Layout;
