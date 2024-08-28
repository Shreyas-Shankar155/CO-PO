import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import AdminPage from './AdminPage/AdminPage';
import CoursePage from './CoursePage/CoursePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <h1>CO-PO Calculation for 2024 Batch</h1>
      <div className="card">
        <nav>
          <ul>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
            <li>
              <Link to="/course">Course Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;