"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { features, title } from "process";
import { desc } from "framer-motion/client";

const Service: React.FC = () => {
  // State to track which service is being hovered
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Services data with expanded information
  const services = [
    {
      title: "ChatGPT Plus",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6M9 11h3"
          />
        </svg>
      ),
      description:
        "Monthly ChatGPT Plus subscription service providing access to GPT-4, faster response times, and priority feature access for businesses and professionals.",
      features: [
        "Access to GPT-4 model",
        "Faster response times",
        "Priority access to new features",
        "Enhanced performance during peak times",
        "Improved context handling",
      ],
      image: "/images/ai-tools/chatgpt.png",
    },
    {
      title: "Claude AI",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      description:
        "Claude AI is a powerful AI assistant designed to enhance productivity and streamline workflows. It offers advanced natural language processing capabilities, making it ideal for businesses looking to leverage AI for customer support, content generation, and more.",
      features: [
        "Advanced natural language processing",
        "Contextual understanding",
        "Multi-turn conversations",
        "Integration with various platforms",
        "Customizable for specific business needs",
      ],
      image: "/images/ai-tools/claude.png",
    },
    {
      title: "Canva Pro",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Canva Pro is a premium design tool that empowers users to create stunning graphics, presentations, and marketing materials with ease. It offers a vast library of templates, images, and design elements, making it perfect for businesses and individuals looking to enhance their visual content.",
      features: [
        "Access to premium templates and images",
        "Advanced design tools and features",
        "Collaboration tools for teams",
        "Brand kit for consistent branding",
        "Cloud storage for easy access",
      ],
      image: "/images/ai-tools/canva.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-transparent text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating shapes (optional) */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-zinc-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-gray-300 font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Our AI Tools
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            We provide end-to-end solutions to help businesses transform their
            digital presence and achieve exceptional results in the modern
            market.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-zinc-800/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/10 h-full z-10">
                {/* Service card content */}
                <div className="p-8 md:p-10">
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-stone-800 text-gray-300 shadow-lg border border-slate-700/30`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Technologies list */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900/50 text-gray-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Call to action */}
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <div className="inline-flex items-center text-gray-300 hover:text-gray-100 font-medium transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Decorative gradient bar at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 to-zinc-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                ></div>
              </div>

              {/* Animated highlight effect when active */}
              {activeIndex === index && (
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/30 to-zinc-700/30 rounded-2xl blur opacity-30 -z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/services">
            <button className="px-8 py-3 bg-slate-800/50 hover:bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-lg text-gray-300 hover:text-gray-100 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
              View All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
