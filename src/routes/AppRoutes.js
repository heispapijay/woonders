import React from 'react';

import { Home, About, Contact } from './pages';
import { Navbar } from '../components';
import { Footer } from '../containers';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="../../routes/pages/Home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRoutes
