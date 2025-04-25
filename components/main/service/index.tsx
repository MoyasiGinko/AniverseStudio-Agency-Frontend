"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Service: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Web Development",
              icon: "💻",
              description:
                "Custom websites that engage visitors and drive conversions.",
            },
            {
              title: "App Development",
              icon: "📱",
              description:
                "Native and cross-platform mobile applications for iOS and Android.",
            },
            {
              title: "Digital Marketing",
              icon: "📈",
              description:
                "Strategic marketing to increase visibility and acquire customers.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
