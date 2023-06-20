import React from 'react'
import Layout from './components/layouts';
import ScrollToTop from "./components/shared/ScrollToTop";
import AppRoutes from './AppRoutes';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Layout>
      <CssBaseline />
      <ScrollToTop />
      <AppRoutes />
    </Layout>
  )
}

export default App