import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Phone, Copy, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ResponsiveImage from '../ui/ResponsiveImage';
import { media } from '../../data/media';

export default function ContactSection() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const mediaQuote = t('hero.mediaQuote');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mediaQuote);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4 bg-night-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section title */}
          <motion.div variants={itemVariants}>
            <SectionTitle>{t('contact.title')}</SectionTitle>
            <p className="text-chrome-400 mt-2">{t('contact.subtitle')}</p>
          </motion.div>

          {/* Media quote */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="p-6 bg-night-800 rounded-2xl border border-night-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-chrome-300 font-medium">{t('contact.mediaQuote')}</h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-chrome-400 hover:text-chrome-200 bg-night-700 hover:bg-night-600 rounded-lg transition-colors"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? t('contact.copySuccess') : 'Copy'}
                </button>
              </div>
              <p className="text-chrome-200 leading-relaxed">"{mediaQuote}"</p>
            </div>
          </motion.div>

          {/* Contact cards */}
          <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Artist */}
            <div className="p-6 bg-night-800 rounded-2xl border border-night-700">
              <h3 className="text-chrome-400 text-sm uppercase tracking-wider mb-4">
                {t('contact.artist.label')}
              </h3>
              <p className="font-display text-2xl font-semibold text-chrome-100 mb-4">
                GIBI
              </p>
              <a
                href="https://instagram.com/gibi_5lg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
                {t('contact.artist.instagram')}
              </a>
            </div>

            {/* Manager */}
            <div className="p-6 bg-night-800 rounded-2xl border border-night-700">
              <h3 className="text-chrome-400 text-sm uppercase tracking-wider mb-4">
                {t('contact.manager.label')}
              </h3>
              <p className="font-display text-2xl font-semibold text-chrome-100 mb-1">
                {t('contact.manager.name')}
              </p>
              <p className="text-chrome-400 text-sm mb-4">
                {t('contact.manager.instagram')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/khaled.sd1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-night-700 text-chrome-200 font-medium rounded-lg hover:bg-night-600 transition-colors"
                >
                  <Instagram size={18} />
                  {t('contact.cta.instagramManager')}
                </a>
                <a
                  href="tel:+41776947729"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neon-amber text-night-900 font-medium rounded-lg hover:bg-neon-amber/90 transition-colors"
                >
                  <Phone size={18} />
                  {t('contact.cta.call')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image cover finale */}
          <motion.div variants={itemVariants} className="mt-20 flex justify-center">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
              <ResponsiveImage
                src={media.cover.src}
                alt={media.cover.alt}
                ratio="1/1"
                className="w-full h-auto shadow-2xl"
                overlay
                caption={media.cover.alt}
              />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="mt-16 pt-8 border-t border-night-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-chrome-500 text-sm">
              <p>© 2026 GIBI — I SHINE BETTER AT NIGHT</p>
              <p>Press Kit</p>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}