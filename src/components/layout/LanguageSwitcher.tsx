import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-night-800 rounded-full">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={clsx(
            'relative px-3 py-1 text-xs font-semibold tracking-wider rounded-full transition-all duration-300',
            i18n.language === lang.code
              ? 'text-night-900'
              : 'text-chrome-400 hover:text-chrome-200'
          )}
        >
          {i18n.language === lang.code && (
            <motion.div
              layoutId="language-bg"
              className="absolute inset-0 bg-neon-amber rounded-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}