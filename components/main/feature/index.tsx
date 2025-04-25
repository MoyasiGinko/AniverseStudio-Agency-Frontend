"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Featured: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="h-80 bg-gray-300">
                {/* Replace with actual project images */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Project Image {item}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Project Title {item}</h3>
                  <p className="mb-2">Web Development</p>
                  <Link href={`/projects/${item}`}>
                    <span className="text-sm underline">View Project</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <span className="border border-blue-900 text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-blue-900 hover:text-white transition-all">
              View All Work
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
