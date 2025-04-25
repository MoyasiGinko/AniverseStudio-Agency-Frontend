"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Integration",
              desc: "Cutting-edge artificial intelligence solutions for your projects.",
              icon: "🤖",
            },
            {
              title: "3D Rendering",
              desc: "Stunning visual experiences with our advanced rendering pipeline.",
              icon: "🎮",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Scalable and reliable cloud-based development environments.",
              icon: "☁️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
