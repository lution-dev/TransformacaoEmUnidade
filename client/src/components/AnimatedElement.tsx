import React, { useEffect, useState } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  variants,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: once });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      if (once) {
        setHasAnimated(true);
      }
    } else if (!inView && !once && hasAnimated) {
      controls.start('hidden');
    }
  }, [controls, inView, hasAnimated, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;