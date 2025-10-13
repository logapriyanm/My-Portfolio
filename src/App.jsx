import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from "./Components/Footer"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-back',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-x"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        </div>
        
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        
        {/* Floating Particles Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App