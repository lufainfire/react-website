import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
