import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import UserHome from './pages/userHome/userHome';



function App() {
  
  return (
    <Router>
      <Routes>
        {/*Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/userHome" element={<UserHome/>}/>



          
      </Routes>
    </Router>
  );
}

export default App;
