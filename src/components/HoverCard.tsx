'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const HoverCard = ({ children, className = '', delay = 0 }: HoverCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard; 