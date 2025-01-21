import React from "react";
import './sideBar.css'; // Import CSS file for styles

const SideBar = ({onSelect}) => {
  return (
    <div className="sideBar-containerNull">
      <div className="sidebar">
        {/* Navigation Links */}
        <div className="navSection">
          <a href="#" className="navLink" id="pS" onClick={() => onSelect("profile")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle sBIcons" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            Profile Section
          </a>
          <a href="#" className="navLink" id="taskManagement" onClick={() => onSelect("tasks")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-task sBIcons" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
              <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
            </svg>
            Tasks Management
          </a>
          <a href="#" className="navLink" id="productivity" onClick={() => onSelect("productivity")}>
            Productivity
          </a>
          <a href="#" className="navLink" id="history" onClick={() => onSelect("history")}>
            History
          </a>
          <a href="#" className="navLink" id="reports" onClick={() => onSelect("reports")}>
            Reports
          </a>
          <a href="#" className="navLink" id="integrations" onClick={() => onSelect("integrations")}>
            Integrations
          </a>
        </div>

        {/* Log Out Section */}
        <div className="logOutSection">
          <a href="#" className="navLink" id="logOut" onClick={() => onSelect("logOut")}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
