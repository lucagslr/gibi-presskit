import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  centered?: boolean;
}

export default function SectionTitle({ children, centered = false }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`font-display text-4xl md:text-5xl font-bold text-chrome-100 ${
        centered ? 'text-center' : ''
      }`}
    >
      {children}
    </motion.h2>
  );
}