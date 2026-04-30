import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'hero', href: '#hero' },
  { key: 'project', href: '#project' },
  { key: 'bio', href: '#bio' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-night-950/90 backdrop-blur-md border-b border-night-700'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-chrome-100 hover:text-neon-amber transition-colors"
          >
            GIBI
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-chrome-300 hover:text-chrome-100 text-sm font-medium tracking-wide uppercase transition-colors relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-amber transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-chrome-300 hover:text-chrome-100 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-night-900/95 backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-chrome-300 hover:text-chrome-100 text-lg font-medium tracking-wide uppercase py-2 transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}