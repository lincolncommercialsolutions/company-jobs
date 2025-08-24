import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Jobs from "./pages/Jobs";
import ApplyForm from "./pages/ApplyForm";

export default function App() {
  const linkStyle = {
    display: "inline-block",
    padding: "10px 15px",
    marginRight: "10px",
    border: "2px solid #4CAF50",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#4CAF50",
    fontWeight: "bold",
    transition: "all 0.2s ease-in-out"
  };

  const linkHover = {
    backgroundColor: "#4CAF50",
    color: "white"
  };

  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Opportunities at Lincoln Commercial Solutions, LLC</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={e => Object.assign(e.target.style, linkHover)}
            onMouseLeave={e => Object.assign(e.target.style, linkStyle)}
          >
            Home
          </Link>
          <Link 
            to="/jobs" 
            style={linkStyle}
            onMouseEnter={e => Object.assign(e.target.style, linkHover)}
            onMouseLeave={e => Object.assign(e.target.style, linkStyle)}
          >
            Opportunities
          </Link>
        </nav>

        <Routes>
          {/* Redirect / to /jobs */}
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply/:id" element={<ApplyForm />} />
        </Routes>
      </div>
    </Router>
  );
}
