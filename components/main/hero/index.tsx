"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Ref for the animated text element
  const textRef = useRef<HTMLSpanElement>(null);

  // Words to animate
  const words = [
    "Digital Experiences",
    "Brand Stories",
    "Growth Solutions",
    "Future Tech",
  ];

  // Text animation effect
  useEffect(() => {
    if (!textRef.current) return;

    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      if (textRef.current) {
        // Adding fade out effect
        textRef.current.style.opacity = "0";

        setTimeout(() => {
          if (textRef.current) {
            // Change text and fade in
            currentIndex = (currentIndex + 1) % words.length;
            textRef.current.textContent = words[currentIndex];
            textRef.current.style.opacity = "1";
          }
        }, 500); // Half-second for fade out before changing text
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(animationInterval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Core values with icons and descriptions
  const coreValues = [
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions",
      icon: (
        <svg
          className="w-10 h-10 mx-auto mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Expertise",
      description: "Years of specialized industry knowledge",
      icon: (
        <svg
          className="w-10 h-10 mx-auto mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Results",
      description: "Measurable impact on your business",
      icon: (
        <svg
          className="w-10 h-10 mx-auto mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Support",
      description: "Always there when you need us",
      icon: (
        <svg
          className="w-10 h-10 mx-auto mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
        </div>
      </div>

      {/* Animated particles/blobs in background (optional) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container relative mx-auto max-w-6xl px-4 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Transforming Ideas Into{" "}
            <span className="relative">
              <span
                ref={textRef}
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 transition-opacity duration-500"
              >
                Digital Experiences
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl"
          >
            We create cutting-edge digital solutions that elevate your brand and
            drive business growth through innovative strategies and purposeful
            design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-gradient-to-r from-gray-950 to-blue-700 hover:from-gray-950 hover:to-blue-600 transition-all rounded-lg font-medium text-white shadow-lg shadow-blue-900/50 hover:shadow-blue-900/70 transform hover:-translate-y-1">
                View Our Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all rounded-lg font-medium text-white transform hover:-translate-y-1">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          {/* Stats counter */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 flex flex-wrap gap-8 text-center sm:text-left justify-center lg:justify-start"
          >
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start"
              >
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.number}
                </span>
                <span className="text-blue-400 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Hero image/illustration side */}
        <motion.div
          className="lg:w-1/2 flex justify-center z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg h-80 md:h-96">
            {/* Placeholder for hero image - replace with actual image in production */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-blue-600 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              <svg
                className="w-1/2 h-1/2 text-white/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              {/* Uncomment and use this when you have an actual image */}
              <Image
                src="/images/hero/hero1.png"
                alt="Digital solutions illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core values section */}
      <motion.div
        className="container mx-auto max-w-6xl px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="p-6 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-900/20 group"
            >
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {value.icon}
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
