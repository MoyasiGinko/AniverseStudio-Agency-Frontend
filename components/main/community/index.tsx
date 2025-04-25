"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Community: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-2xl">
          <p className="text-lg text-gray-700 mb-6">
            Connect with creators, developers, and artists from around the
            world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Discord", "GitHub", "Twitter", "YouTube"].map((platform, i) => (
              <button
                key={i}
                className="bg-white text-gray-800 px-5 py-2 rounded-lg shadow hover:shadow-md transition"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
