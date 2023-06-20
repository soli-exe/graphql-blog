import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/author/AuthorPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
    )
}

export default AppRoutes