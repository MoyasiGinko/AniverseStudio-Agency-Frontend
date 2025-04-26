"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Turning Ideas Into Digital Reality
          </h1>
          <p className="text-xl mb-8">
            We create exceptional digital experiences that drive growth and
            transform businesses.
          </p>
          <Link href="/contact">
            <span className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Get Started
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
