import { motion } from 'framer-motion';
import clsx from 'clsx';

type BadgeColor = 'amber' | 'cyan' | 'violet' | 'pink';

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
}

const colorClasses: Record<BadgeColor, string> = {
  amber: 'bg-neon-amber/20 text-neon-amber border-neon-amber/30',
  cyan: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
  violet: 'bg-neon-violet/20 text-neon-violet border-neon-violet/30',
  pink: 'bg-neon-pink/20 text-neon-pink border-neon-pink/30',
};

export default function Badge({ children, color = 'amber' }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={clsx(
        'inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border',
        colorClasses[color]
      )}
    >
      {children}
    </motion.span>
  );
}