import React, { useState } from "react";
import NavComponent from "../features/globalFeatures/navigationFeat/navComponent";
import Footer from "../features/globalFeatures/footer/footer";
import SideBar from "../features/sideBarFeature/sideBarComp";
import ProfileSectionComponent from "../features/profileSectionFeat/profileSectionComponent";
import '../features/sideBarFeature/sideBar.css';

const UserHome = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelect = (component) => {
    if (component === "profile") {
      setSelectedComponent(<ProfileSectionComponent />);
    } else {
      setSelectedComponent(null); // Reset or handle other cases
    }
  };

  return (
    <div className="sideBar-container" style={{height:"89vh"}} >
      <NavComponent />
      <div style={{display: "flex" , alignItems:"center",  backgroundColor:"transparent"} }>
        <SideBar onSelect={handleSelect} />
        <div  style={{ display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center" ,padding: "100px 100px 100px 100px", backgroundColor: "transparent", width: "60%"}}>
          {selectedComponent }
        </div>

      </div>
    
      <Footer />
    </div>
  );
};

export default UserHome;
