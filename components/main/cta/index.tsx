"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-200"
        >
          Ready to start your project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's collaborate to bring your vision to life with our expertise in
          digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-slate-700 to-zinc-700 text-gray-100 px-10 py-4 rounded-full
                         font-medium hover:from-slate-600 hover:to-zinc-600 transition-all duration-300
                         border border-slate-600 shadow-lg hover:shadow-xl hover:shadow-black/10"
            >
              Contact Us
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
