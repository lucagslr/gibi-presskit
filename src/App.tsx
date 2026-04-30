import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/presskit/HeroSection';
import ProjectSection from './components/presskit/ProjectSection';
import BioTracklistSection from './components/presskit/BioTracklistSection';
import ContactSection from './components/presskit/ContactSection';
import ScrollIndicator from './components/ui/ScrollIndicator';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-night-950">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-amber via-neon-cyan to-neon-violet z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection isLoaded={isLoaded} />
        <ProjectSection />
        <BioTracklistSection />
        <ContactSection />
      </main>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
}

export default App;