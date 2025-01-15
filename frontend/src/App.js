import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './features/navigationFeat/navComponent';
import HeroSection from './features/heroSection/heroSec';
import Footer from './features/footer/footer';

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <HeroSection/>
      <Footer/>
     
    </div>
  

     



  );
};

export default App;
