import React, { useState } from 'react';
import './login.css';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true, // Include cookies for authentication
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        console.log('Login successful:', userData);

        // Show success toast
        toast.success('Login successful! Welcome back.');

        // Redirect to /userHome after a delay to show the toast
        setTimeout(() => {
          navigate('/userHome');
        }, 2000); // Adjust delay as needed
      }
    } catch (error) {
      if (error.response) {
        // Show error toast with the server-provided message
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        // Show generic error toast for request failure
        toast.error('Something went wrong. Please try again later.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="d-flex align-items-center py-5 bg-body-tertiary login-container">
      <main className="form-signin  col-md-5 col-sm-6 m-auto login">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingName">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3" style={{ color: 'white' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Login Now!
          </button>
        </form>
      </main>

      {/* Toast Container for notifications */}
      <ToastContainer pauseOnHover={false}/>
    </div>
  );
};

export default Login;
