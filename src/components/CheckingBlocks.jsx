import React from 'react';
import { motion } from 'framer-motion';

export default function CheckingBlocks({ title, color, filter }) {
  return (
    <motion.div
      initial={{
        // x: -100,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        // x: 0,
      }}
      transition={{
        duration: 0.5,
        // ease: 'linear',
        // duration: 2,
        // x: { duration: 1 },
        // type: 'spring',
        // stiffness: 100,
      }}
      className={`checking-box ${color}`}
    >
      <span className={`${filter}`}>{title}</span>
    </motion.div>
  );
}
