"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 py-24 md:py-32 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Ideas Into
            <span className="text-blue-500"> Digital Experiences</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl md:mx-0 mx-auto">
            We create cutting-edge digital solutions that elevate your brand and
            drive business growth.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium">
                View Our Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors rounded-lg font-medium">
                Get In Touch
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["Innovation", "Expertise", "Results", "Support"].map(
            (value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-4"
              >
                <div className="text-blue-500 text-xl font-bold mb-2">
                  {value}
                </div>
                <div className="text-gray-400">Our core principles</div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
