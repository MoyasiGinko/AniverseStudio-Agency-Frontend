"use client";
import React from "react";
import { motion } from "framer-motion";

const Technology = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200"
        >
          Our Technology
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Integration",
              desc: "Cutting-edge artificial intelligence solutions for your projects.",
              icon: "🤖",
              bgGradient: "from-slate-800 to-slate-700",
              borderColor: "border-slate-600",
              iconBg: "bg-slate-900",
            },
            {
              title: "3D Rendering",
              desc: "Stunning visual experiences with our advanced rendering pipeline.",
              icon: "🎮",
              bgGradient: "from-zinc-800 to-zinc-700",
              borderColor: "border-zinc-600",
              iconBg: "bg-zinc-900",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Scalable and reliable cloud-based development environments.",
              icon: "☁️",
              bgGradient: "from-stone-800 to-stone-700",
              borderColor: "border-stone-600",
              iconBg: "bg-stone-900",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeInVariants}
              className={`bg-gradient-to-br ${item.bgGradient} p-6 rounded-xl border ${item.borderColor}
                         shadow-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-300
                         hover:translate-y-[-2px] group`}
            >
              <div
                className={`${item.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6
                             shadow-inner group-hover:scale-105 transition-transform duration-300`}
              >
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
