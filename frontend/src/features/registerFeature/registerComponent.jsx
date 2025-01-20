import React, { useState } from 'react';
import './register.css';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
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
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('User registered successfully:', userData);

        // Show success toast
        toast.success('Registration successful! Redirecting to login...');

        // Redirect to login page after a delay to allow toast to appear
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Adjust delay as needed
      } else {
        const errorData = await response.json();
        console.error('Registration error:', errorData.message);

        // Show error toast
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Request failed:', error);

      // Show error toast
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="d-flex align-items-center py-5 bg-body-tertiary register-container">
      <main className="form-signin col-md-5 col-sm-6 m-auto login">
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
              type="number"
              className="form-control"
              id="floatingAge"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingAge">Age</label>
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
            Register Now!
          </button>
        </form>
      </main>

      {/* Toast Container for notifications */}
      <ToastContainer pauseOnHover={false}/>
    </div>
  );
};

export default Register;
