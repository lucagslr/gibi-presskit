import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after scrolling past hero section
      setIsVisible(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-30 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2 text-chrome-500">
            <div className="w-px h-12 bg-gradient-to-b from-chrome-500 to-transparent rounded-full" />
            <span className="text-xs tracking-widest uppercase rotate-90 origin-center whitespace-nowrap">
              Scroll
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}