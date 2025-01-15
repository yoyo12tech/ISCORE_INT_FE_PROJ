import React from 'react';
import taskImage from '../../images/tasks.jpg';
import './heroSec.css';
const HeroSection = () => {
  return (
    <div className="gradient-background" id="hero-section">  
    <div className="px-4 py-5  text-center">
      <img
        className="d-block mx-auto mb-4 rounded"
        src={taskImage} alt="Vacation"
        width="300"
        height="200"
      />
      <h1 className="display-5 fw-bold text-blue">Welcome to Personal Task Tracker</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Stay organized and boost your productivity with the Personal Task Tracker app. This tool helps you easily manage and prioritize your daily tasks, set reminders, and track progress. Whether you’re handling personal projects or work-related tasks, this app provides a simple, intuitive interface to keep you on top of everything.




        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Get Started
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Login
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
