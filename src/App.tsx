import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PromotionalPopup from './components/PromotionalPopup';
import Sabi from './components/Sabi';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let newActiveSection = 0;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
          newActiveSection = index;
        }
      });
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <div className="font-sans antialiased">
            <Navbar />
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="courses">
                <Courses />
              </section>
              <section id="about">
                <WhyChooseUs />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="placements">
                <Placements />
              </section>
              <section id="contact">
                <CallToAction />
              </section>
            </main>
            <Footer />
            <PromotionalPopup />
            <Sabi />
            <div className="scroll-indicator">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
                  onClick={() => {
                    const sections = document.querySelectorAll('section');
                    sections[index].scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;