"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage: FC = () => {
  return (
    <section className="py-20 md:py-40 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/hero/hero1.png"
              alt="AniverseStudio Team"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-gray-100 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, AniverseStudio is a forward-thinking digital
              agency specializing in web development, UI/UX design, and
              comprehensive digital solutions. We believe in creating immersive
              digital experiences that not only look stunning but also drive
              results for our clients.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team of passionate developers, designers, and digital
              strategists work together to transform your vision into reality.
              We pride ourselves on staying ahead of industry trends while
              maintaining a focus on user-centric design and performance-driven
              development.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-blue-500 mb-2">100+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-blue-500 mb-2">50+</h4>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-semibold text-gray-100 mb-10 text-center">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-zinc-700 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-100">
                Web Development
              </h4>
              <p className="text-gray-400">
                Custom websites and web applications built with cutting-edge
                technologies and frameworks.
              </p>
            </div>

            <div className="p-6 bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-zinc-700 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-100">
                UI/UX Design
              </h4>
              <p className="text-gray-400">
                User-centric design solutions that create intuitive and engaging
                digital experiences.
              </p>
            </div>

            <div className="p-6 bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-zinc-700 rounded-full flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-blue-500"
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
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-100">
                Digital Marketing
              </h4>
              <p className="text-gray-400">
                Strategic digital marketing solutions to boost your online
                presence and drive growth.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-100 mb-6">
            Our Mission
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At AniverseStudio, we're on a mission to help businesses thrive in
            the digital landscape by creating innovative, user-friendly, and
            performance-driven digital solutions. We combine technical expertise
            with creative thinking to deliver results that exceed expectations.
          </p>

          <div className="mt-12">
            <button className="bg-blue-600 text-gray-100 py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
