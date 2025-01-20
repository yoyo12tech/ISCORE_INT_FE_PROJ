import React from 'react';
import NavComponent from '../features/globalFeatures/navigationFeat/navComponent';
import Login  from '../features/loginFeature/login';
import Footer from '../features/globalFeatures/footer/footer';


const LoginPage = () => {
    return (
      <div>
        <NavComponent />
        <div >
          <Login/>
        </div>
        <Footer />
      </div>
    );
};

export default LoginPage;

  