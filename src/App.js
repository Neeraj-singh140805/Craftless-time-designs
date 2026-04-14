import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="header">
          <h1 className="logo">THE DESIGNS</h1>

          <nav className="nav">
            {isLoggedIn ? (
              <>
                <Link className="main" to="/home">Home</Link>
                <Link className="main" to="/projects">Projects</Link>
                <Link className="main" to="/contact">Contact</Link>
                <button
                  className="main logout-btn"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="main" to="/login">Login</Link>
                <Link className="main" to="/signup">Sign Up</Link>
              </>
            )}
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <h1 className="pagelinks1">© 2023 Portfolio</h1>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;



