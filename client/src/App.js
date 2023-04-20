import React from "react";
import { About, Contact, Courses, Home, Login, Register } from "./containers";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/Footer/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
