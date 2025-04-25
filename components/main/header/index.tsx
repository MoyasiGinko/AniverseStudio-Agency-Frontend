"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-20">
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="AniverseStudio Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/get-started"
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoMdClose
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <HiMenuAlt4
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col z-10 pt-20 px-6"
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-white text-xl font-medium hover:text-blue-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="mt-4 px-8 py-3 bg-white text-blue-600 rounded-full text-xl font-medium hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
