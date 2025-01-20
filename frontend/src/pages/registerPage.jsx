import React from 'react';
import NavComponent from '../features/globalFeatures/navigationFeat/navComponent';
import Register  from '../features/registerFeature/registerComponent';
import Footer from '../features/globalFeatures/footer/footer';


const RegisterPage = () => {
    return (
      <div>
        <NavComponent />
        <div >
          <Register />
        </div>
        <Footer />
      </div>
    );
};

export default RegisterPage;

  