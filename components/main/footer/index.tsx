"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-gradient-to-b from-zinc-900 to-slate-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-gray-200 transition-colors duration-300
                           relative group font-medium"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400
                                 group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-gray-300 font-semibold text-lg">
              AniverseStudio
            </div>
            <div className="text-gray-500 text-sm">
              © {currentYear} AniverseStudio. All rights reserved.
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          />
        </div>

        {/* Background Pattern (optional) */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
