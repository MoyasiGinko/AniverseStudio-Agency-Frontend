"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define types for portfolio items
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
};

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and inventory management.",
    imageUrl: "/images/portfolio/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/portfolio/ecommerce",
  },
  {
    id: "project2",
    title: "Travel Booking App",
    description:
      "Mobile-responsive travel booking platform with real-time availability.",
    imageUrl: "/images/portfolio/travel.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    link: "/portfolio/travel-app",
  },
  {
    id: "project3",
    title: "Healthcare Dashboard",
    description:
      "Analytics dashboard for healthcare providers with patient management.",
    imageUrl: "/images/portfolio/healthcare.jpg",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    link: "/portfolio/healthcare",
  },
  {
    id: "project4",
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours.",
    imageUrl: "/images/portfolio/realestate.jpg",
    tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
    link: "/portfolio/real-estate",
  },
  {
    id: "project5",
    title: "Educational Platform",
    description:
      "Interactive learning management system with course creation tools.",
    imageUrl: "/images/portfolio/education.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "/portfolio/education",
  },
  {
    id: "project6",
    title: "Finance Management App",
    description:
      "Personal finance tracker with budgeting tools and investment insights.",
    imageUrl: "/images/portfolio/finance.jpg",
    tags: ["React Native", "Redux", "Firebase", "Chart.js"],
    link: "/portfolio/finance",
  },
];

const PortfolioPage = () => {
  return (
    <section className="py-20 md:py-40 bg-transparent text-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="relative h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={item.link}>
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-zinc-700 to-zinc-900 text-white font-medium rounded-lg hover:from-zinc-800 hover:to-zinc-950 transition-colors duration-300">
                    View Project
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/contact">
            <span className="inline-block px-8 py-4 bg-gradient-to-r from-zinc-600 to-zinc-800 text-white font-bold rounded-lg hover:from-zinc-700 hover:to-zinc-900 transition-colors duration-300 text-lg">
              Start Your Project
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
