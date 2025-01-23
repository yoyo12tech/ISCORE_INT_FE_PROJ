// Updated UserHome.js

import React, { useState } from "react";
import NavComponent from "../../features/globalFeatures/navigationFeat/navComponent";
import Footer from "../../features/globalFeatures/footer/footer";
import SideBar from "../../features/sideBarFeature/sideBarComp";
import ProfileSectionComponent from "../../features/profileSectionFeat/profileSectionComponent";
import TaskManagement from "../../features/tasksFeature/tasksMangment"
import "./userHome.css";

const UserHome = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelect = (component) => {
    if (component === "profile") {
      setSelectedComponent(<ProfileSectionComponent />);

    }
    else if (component ==="tasks"){
      setSelectedComponent(<TaskManagement />);


    }
    else {
      setSelectedComponent(null); // Reset or handle other cases
    }
  };

  return (
    <div>
      <NavComponent />

      <SideBar onSelect={handleSelect} />

      <div className="userHomeContainer">
      {selectedComponent}
      </div>
      
      <Footer />
    </div>
  );
};

export default UserHome;
