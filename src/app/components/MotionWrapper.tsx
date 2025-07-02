"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function MotionWrapper({
  children,
  delay = 0.2,
  duration = 0.6,
  yOffset = 30,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
