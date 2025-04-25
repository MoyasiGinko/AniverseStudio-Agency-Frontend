"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to start your project?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life with our expertise in
          digital solutions.
        </p>
        <Link href="/contact">
          <span className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-all">
            Contact Us
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
