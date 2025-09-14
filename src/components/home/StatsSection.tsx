"use client";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

export const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: 18, label: "TRAINING PROGRAMS", suffix: "" },
    { number: 12500, label: "ANUAL TRAINING HOURS", suffix: "+" },
    { number: 200, label: "PARTICIPANTS SERVED", suffix: "" },
    { number: 92, label: "COMPLETION RATE", suffix: "%" },
    { number: 68, label: "NPS", suffix: "" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=600&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-yellow-600/75"></div>

      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(234,179,8,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-white"
              variants={itemVariants}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-3 text-[#ff9067f9]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {isInView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </motion.div>
              <motion.div
                className="text-sm md:text-base text-white font-medium tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
