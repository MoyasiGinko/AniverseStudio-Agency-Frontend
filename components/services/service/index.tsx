"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Service: React.FC = () => {
  // State to track which service is being hovered
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Services data with expanded information
  const services = [
    {
      title: "Web Development",
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Custom websites that engage visitors and drive conversions. We build responsive, fast-loading sites with modern technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      color: "from-slate-700 to-zinc-700",
      iconBg: "bg-slate-800",
      image: "/images/web-dev.jpg",
    },
    {
      title: "App Development",
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
        </svg>
      ),
      description:
        "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless functionality.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-zinc-700 to-stone-700",
      iconBg: "bg-zinc-800",
      image: "/images/app-dev.jpg",
    },
    {
      title: "Digital Marketing",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "Strategic marketing to increase visibility and acquire customers. Data-driven campaigns that deliver measurable results.",
      technologies: ["SEO", "PPC", "Social Media", "Content Marketing"],
      color: "from-stone-700 to-slate-700",
      iconBg: "bg-stone-800",
      image: "/images/digital-marketing.jpg",
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
            Our Services
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
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl ${service.iconBg} text-gray-300 shadow-lg border border-slate-700/30`}
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
                    {service.technologies.map((tech, techIndex) => (
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
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
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
