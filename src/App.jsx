import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PatientExperience from './components/PatientExperience';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PatientExperience />
      <Contact />
    </div>
  );
};

export default App;
