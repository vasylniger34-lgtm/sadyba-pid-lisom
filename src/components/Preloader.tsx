import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white overflow-hidden select-none"
        >
          {/* Animated Background Pines Silhouette */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent animate-pulse" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Logo pulse container */}
            <div className="relative mb-6 p-4 rounded-full bg-forest-900/60 border border-forest-700/50 shadow-2xl backdrop-blur-md">
              <Logo variant="dark" className="h-28" showText={false} />
            </div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-2"
            >
              Садиба <span className="text-amber-400">під лісом</span>
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-forest-200 text-sm md:text-base font-medium tracking-wide max-w-sm mb-8"
            >
              Затишний відпочинок & Домашня кухня на курорті Бакота
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 bg-forest-950/80 h-2.5 rounded-full overflow-hidden p-0.5 border border-forest-700/40 shadow-inner mb-3">
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full shadow-glow"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            <span className="text-xs font-mono tracking-wider text-amber-400 font-semibold">
              {Math.min(progress, 100)}% • Завантаження атмосфери...
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
