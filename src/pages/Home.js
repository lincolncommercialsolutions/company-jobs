import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jobs from "./Jobs";
import ApplyForm from "./ApplyForm";
function Home() {
  return (
    <div>
      <h2>Welcome to our opportunities page</h2>
      <p>Click below to see our open positions:</p>
      <Link to="/jobs">
        <button style={{ padding: "10px 20px", marginTop: "10px" }}>
          View Jobs
        </button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Opportunities at Lincoln Commercial Solutions, LLC</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/jobs" style={{ marginRight: "10px" }}>
            Jobs
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply/:id" element={<ApplyForm />} />
        </Routes>
      </div>
    </Router>
  );
}

