"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Featured: React.FC = () => {
  // State for current active project
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "Web Development",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      description:
        "An elegant e-commerce solution with advanced product filtering and seamless checkout.",
      image: "/images/project-1.jpg", // Replace with actual image paths
      client: "FashionHub",
      link: "/portfolio/fashionhub",
    },
    {
      id: 2,
      title: "Finance Management App",
      category: "App Development",
      tags: ["React Native", "Firebase", "Redux"],
      description:
        "Personal finance tracker with intuitive dashboards and real-time insights.",
      image: "/images/project-2.jpg", // Replace with actual image paths
      client: "WealthWise",
      link: "/portfolio/wealthwise",
    },
    {
      id: 3,
      title: "Healthcare Portal",
      category: "Web & Mobile Development",
      tags: ["React", "GraphQL", "Tailwind CSS"],
      description:
        "Comprehensive patient management system with secure health record access.",
      image: "/images/project-3.jpg", // Replace with actual image paths
      client: "MediConnect",
      link: "/portfolio/mediconnect",
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Function to handle project hover
  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section
      id="featured"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-slate-800/80 border border-slate-700 text-gray-300 rounded-full font-medium text-sm">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our most impactful work that demonstrates our expertise and
            commitment to delivering exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
              className="group relative bg-gradient-to-br from-slate-800/80 to-zinc-800/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-300 h-[450px] border border-slate-700/50"
            >
              {/* Project image */}
              <div className="relative h-60 w-full overflow-hidden">
                {/* Image placeholder - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-zinc-700 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-500 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                /> */}

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-slate-700/50">
                  {project.category}
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-400">
                    Client:{" "}
                    <span className="font-medium text-gray-300">
                      {project.client}
                    </span>
                  </span>

                  <Link href={project.link}>
                    <div className="inline-flex items-center text-gray-300 font-medium text-sm hover:text-gray-100 transition-colors">
                      View Project
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
              </div>

              {/* Animated border when active */}
              {activeProject === project.id && (
                <div className="absolute inset-0 border-2 border-slate-600 rounded-xl pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View all work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/portfolio">
            <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-gray-300 border-2 border-slate-600 rounded-full group hover:text-gray-100 transition-colors">
              <span className="absolute left-0 block w-full h-0 transition-all bg-slate-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative">View All Work</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
