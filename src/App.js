import React from 'react';
import NavBar from './components/NavBar';
import SecServicesSection from './components/SecServicesSection';
import ServiceSection from './components/ServiceSection';
import './App.css';

function App() {
  return (
    <div className="App">
           <NavBar />
            <SecServicesSection />
            <ServiceSection/>
    </div>
  );
}

export default App;
