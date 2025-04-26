"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-200"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-zinc-800/50 backdrop-blur-sm p-10 rounded-2xl border border-slate-700">
            <blockquote className="text-center">
              <div className="mb-6">
                <span className="text-5xl text-slate-600 font-serif">"</span>
              </div>
              <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">
                Working with Aniverse Studio transformed our online presence.
                Their team was professional, creative, and delivered beyond our
                expectations.
              </p>
              <cite className="not-italic block">
                <div className="font-semibold text-gray-200">Jane Smith</div>
                <div className="text-gray-400">CEO, TechCorp</div>
              </cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
