import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./profileSec.css"; // Separate CSS file for styling

const ProfileSectionComponent = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Loading name...",
    email: "Loading email...",
  });

  useEffect(() => {
    // Make the API request to get user info using axios
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/userInfo", {
          withCredentials: true, // Automatically sends cookies with the request
        });

        setUserDetails({
          name: response.data.name,
          email: response.data.email,
        });

        // Show success toast
        toast.success("Fetched user info successfully!");
      } catch (error) {
        console.error("Error fetching user info:", error);

        // Show error toast
        toast.error("Failed to fetch user info. Please try again.");
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Account Details</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            value={userDetails.name}
            readOnly
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={userDetails.email}
            readOnly
            className="form-input"
          />
        </div>
      </form>

      {/* Toast Container for notifications */}
      <ToastContainer   pauseOnFocusLoss={false} pauseOnHover={false}  // Disable pause on hover
      />
    </div>
  );
};

export default ProfileSectionComponent;
