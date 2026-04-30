import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  ratio?: '16/9' | '4/5' | '1/1' | '3/4' | 'hero';
  objectPosition?: string;
  className?: string;
  overlay?: boolean;
  caption?: string;
  loading?: 'eager' | 'lazy';
  rounded?: boolean;
  style?: React.CSSProperties;
}

const ratioMap = {
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
  hero: 'aspect-[2/1] md:aspect-[21/9] lg:aspect-[2.5/1]'
};

export default function ResponsiveImage({
  src,
  alt,
  ratio = '1/1',
  objectPosition = 'center',
  className = '',
  overlay = false,
  caption,
  loading = 'lazy',
  rounded = true,
  style
}: ResponsiveImageProps) {
  return (
    <figure
      className={clsx(
        'relative overflow-hidden',
        ratioMap[ratio],
        rounded ? 'rounded-2xl' : '',
        'shadow-xl border border-night-800',
        className
      )}
      style={style}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        style={{ objectFit: 'cover', objectPosition }}
        className="w-full h-full block transition-transform duration-500 will-change-transform"
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-900/40 to-transparent pointer-events-none" />
      )}
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-soft-light" style={{backgroundImage:'url(/src/assets/images/textures/noise.png)',backgroundSize:'cover'}} />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 w-full bg-night-900/60 text-chrome-300 text-xs px-3 py-2 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
