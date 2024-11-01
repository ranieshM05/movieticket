// src/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';  
import AboutUs from './pages/AboutUs';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';
import './index.css';

ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
    document.getElementById('root')
  );

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/booking/:id" element={<BookingPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
    
}


export default App;
