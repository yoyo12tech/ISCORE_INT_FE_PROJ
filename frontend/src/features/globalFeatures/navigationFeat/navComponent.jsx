import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const NavComponent = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="App-header">
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills headerPart">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === "/" ? "" : "active"}`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/features" 
                className={`nav-link ${location.pathname === "/features" ? "active" : ""}`}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/pricing" 
                className={`nav-link ${location.pathname === "/pricing" ? "active" : ""}`}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/faqs" 
                className={`nav-link ${location.pathname === "/faqs" ? "active" : ""}`}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default NavComponent;
