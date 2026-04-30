import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Mail } from 'lucide-react';
import Badge from '../ui/Badge';
import ResponsiveImage from '../ui/ResponsiveImage';
import { media } from '../../data/media';

interface HeroSectionProps {
  isLoaded: boolean;
}

const badges = [
  { key: 'rb', color: 'amber' as const },
  { key: 'geneva', color: 'cyan' as const },
  { key: '8090s', color: 'violet' as const },
  { key: '5lgenesis', color: 'pink' as const },
];

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20 bg-night-950 overflow-hidden"
    >
      {/* Image d'ambiance premium en background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ResponsiveImage
          src={media.hero.src}
          alt={media.hero.alt}
          ratio="hero"
          objectPosition="center 30%"
          overlay
          loading="eager"
          className="w-full h-full object-cover object-center brightness-[.82]"
          rounded={false}
        />
        {/* Overlay spotlight et grain */}
        <div className="absolute inset-0 bg-spotlight pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-amber/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Press Kit label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-1 mb-8 text-xs font-semibold tracking-[0.3em] uppercase text-chrome-500 border border-night-600 rounded-full">
            {t('hero.pressKit')}
          </span>
        </motion.div>

        {/* Artist name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-chrome-100 mb-4"
        >
          GIBI
        </motion.h1>

        {/* Project title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-chrome-200 mb-6"
        >
          {t('hero.projectTitle')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-chrome-400 text-lg md:text-xl mb-8"
        >
          {t('hero.firstSoloProject')} — {t('hero.releaseDate')}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {badges.map((badge) => (
            <Badge key={badge.key} color={badge.color}>
              {badge.key === 'rb' ? 'R&B' : badge.key === '8090s' ? '80s/90s' : badge.key === '5lgenesis' ? '5LGenesis' : 'Genève'}
            </Badge>
          ))}
        </motion.div>

        {/* Media quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12 text-chrome-300 text-sm md:text-base leading-relaxed italic"
        >
          "{t('hero.mediaQuote')}"
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('#bio')}
            className="group flex items-center gap-2 px-8 py-3 bg-neon-amber text-night-900 font-semibold rounded-full hover:bg-neon-amber/90 transition-all duration-300"
          >
            <Play size={18} className="group-hover:scale-110 transition-transform" />
            {t('hero.ctaTracklist')}
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="group flex items-center gap-2 px-8 py-3 border border-night-600 text-chrome-200 font-semibold rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
          >
            <Mail size={18} />
            {t('hero.ctaContact')}
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => scrollToSection('#project')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-chrome-500 hover:text-chrome-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">{t('hero.scrollHint')}</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}