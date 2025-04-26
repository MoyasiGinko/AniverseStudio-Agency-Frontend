"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Community: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const platforms = [
    { name: "Discord", icon: "💬" },
    { name: "GitHub", icon: "⚡" },
    { name: "Twitter", icon: "🐦" },
    { name: "YouTube", icon: "▶️" },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-200"
        >
          Join Our Community
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInVariants}
          className="bg-gradient-to-br from-slate-800/80 to-zinc-800/80 p-8 md:p-12 rounded-2xl border border-slate-700 backdrop-blur-sm"
        >
          <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Connect with creators, developers, and artists from around the
            world. Join our thriving ecosystem and be part of something
            extraordinary.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-br from-slate-900 to-zinc-900 text-gray-200 px-6 py-3 rounded-xl border border-slate-700
                          shadow-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-300
                          overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">{platform.icon}</span>
                  <span className="font-medium">{platform.name}</span>
                </span>

                {/* Hover gradient effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/30 to-slate-700/0
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
