import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TrackCard from './TrackCard';
import ResponsiveImage from '../ui/ResponsiveImage';
import { media } from '../../data/media';

const tracks = [
  { key: 'track1' },
  { key: 'track2' },
  { key: 'track3', hasNote: true },
  { key: 'track4' },
];

export default function BioTracklistSection() {
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
      id="bio"
      className="min-h-screen py-20 px-4 bg-night-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTitle centered>{t('bio.title')}</SectionTitle>
          </motion.div>

          {/* Bio + Tracklist grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Bio + portrait */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-56 lg:w-64">
                <ResponsiveImage
                  src={media.bio.src}
                  alt={media.bio.alt}
                  ratio="3/4"
                  className="w-full h-auto shadow-2xl"
                  overlay
                  caption={media.bio.alt}
                />
              </div>
              <div className="space-y-6 flex-1">
                <p className="text-chrome-200 text-lg md:text-xl leading-relaxed font-medium">
                  {t('bio.intro')}
                </p>
                <p className="text-chrome-300 text-base leading-relaxed">
                  {t('bio.paragraph1')}
                </p>
                <p className="text-chrome-300 text-base leading-relaxed">
                  {t('bio.paragraph2')}
                </p>
                <p className="text-chrome-300 text-base leading-relaxed">
                  {t('bio.paragraph3')}
                </p>
                <div className="mt-8 p-4 bg-night-800/50 border border-night-700 rounded-xl">
                  <p className="text-chrome-400 text-sm italic">
                    {t('bio.note')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tracklist column */}
            <motion.div variants={itemVariants}>
              <h3 className="font-display text-xl font-semibold text-chrome-200 mb-6">
                {t('tracklist.title')}
              </h3>
              <div className="space-y-4">
                {tracks.map((track, index) => (
                  <TrackCard
                    key={track.key}
                    index={index + 1}
                    trackKey={track.key}
                    hasNote={track.hasNote}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}