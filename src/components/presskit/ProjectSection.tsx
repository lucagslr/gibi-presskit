import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import ResponsiveImage from '../ui/ResponsiveImage';
import { media } from '../../data/media';

const keywords = [
  { key: 'paris', color: 'amber' as const },
  { key: 'plainpalais', color: 'cyan' as const },
  { key: 'gospel', color: 'violet' as const },
  { key: 'rb', color: 'pink' as const },
  { key: '8090s', color: 'amber' as const },
  { key: 'coldStreets', color: 'cyan' as const },
  { key: 'urbanLights', color: 'violet' as const },
];

const stats = [
  { value: '4', label: 'tracks' },
  { value: '1', label: 'solo' },
  { value: '01.05', label: 'release' },
];

export default function ProjectSection() {
  const { t } = useTranslation();

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
      id="project"
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
            <SectionTitle>{t('project.title')}</SectionTitle>
          </motion.div>

          {/* Description + Images éditoriales */}
          <motion.div variants={itemVariants} className="mt-12 space-y-10 md:space-y-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-chrome-200 text-lg md:text-xl leading-relaxed mb-6">
                  {t('project.description')}
                </p>
                <p className="text-chrome-300 text-base md:text-lg leading-relaxed">
                  {t('project.description2')}
                </p>
              </div>
              <ResponsiveImage
                src={media.project1.src}
                alt={media.project1.alt}
                ratio="16/9"
                className="w-full max-w-md mx-auto shadow-2xl"
                overlay
                caption={media.project1.alt}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-chrome-300 text-base md:text-lg leading-relaxed">
                  {t('project.description3')}
                </p>
              </div>
              <ResponsiveImage
                src={media.project2.src}
                alt={media.project2.alt}
                ratio="4/5"
                className="w-full max-w-xs mx-auto shadow-xl"
                overlay
                caption={media.project2.alt}
              />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={itemVariants}
            className="mt-12 pl-6 border-l-2 border-neon-amber"
          >
            <p className="font-display text-2xl md:text-3xl font-semibold text-chrome-100 italic">
              "{t('project.quote')}"
            </p>
          </motion.blockquote>

          {/* Keywords */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword) => (
                <Badge key={keyword.key} color={keyword.color}>
                  {t(`project.keywords.${keyword.key}`)}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-night-800 rounded-2xl border border-night-700"
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-neon-amber">
                    {stat.value}
                  </p>
                  <p className="text-chrome-400 text-sm mt-2 uppercase tracking-wider">
                    {t(`project.stats.${stat.label}`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}