import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

interface TrackCardProps {
  index: number;
  trackKey: string;
  hasNote?: boolean;
}

export default function TrackCard({ index, trackKey, hasNote = false }: TrackCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      className="group p-4 bg-night-800/50 hover:bg-night-800 border border-night-700 hover:border-night-600 rounded-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Track number */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-night-700 group-hover:bg-neon-amber/20 rounded-lg transition-colors">
          <span className="font-display text-lg font-bold text-chrome-300 group-hover:text-neon-amber transition-colors">
            {index}
          </span>
        </div>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-lg font-semibold text-chrome-100 group-hover:text-neon-amber transition-colors">
            {t(`tracklist.${trackKey}.title`)}
          </h4>
          <p className="text-chrome-500 text-sm mt-1">
            {t(`tracklist.${trackKey}.producer`)}
          </p>
          {hasNote && (
            <p className="text-chrome-400 text-sm mt-2 leading-relaxed">
              {t(`tracklist.${trackKey}.note`)}
            </p>
          )}
        </div>

        {/* Icon */}
        <Music size={20} className="flex-shrink-0 text-chrome-600 group-hover:text-neon-amber transition-colors" />
      </div>
    </motion.div>
  );
}