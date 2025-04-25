"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl italic mb-8">
              "Working with Aniverse Studio transformed our online presence.
              Their team was professional, creative, and delivered beyond our
              expectations."
            </p>
            <cite className="not-italic">
              <div className="font-bold">Jane Smith</div>
              <div className="text-blue-200">CEO, TechCorp</div>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
