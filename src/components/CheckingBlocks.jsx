import React from 'react';
import { motion } from 'framer-motion';

export default function CheckingBlocks({ title, color, filter }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`checking-box ${color}`}
    >
      <span className={`${filter}`}>{title}</span>
    </motion.div>
  );
}
