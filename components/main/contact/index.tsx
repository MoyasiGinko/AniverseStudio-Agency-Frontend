"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful submission
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-transparent text-gray-100 py-16 md:py-40 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Contact AniverseStudio
            today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                Our Location
              </h3>
              <p className="text-gray-300">
                123 Digital Avenue, Tech District
                <br />
                New York, NY 10001
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-300">Email: hello@aniversestudio.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-300">Monday - Friday: 9am - 6pm EST</p>
              <p className="text-gray-300">Weekend: By appointment only</p>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://twitter.com/aniversestudio"
                aria-label="Twitter"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com/aniversestudio"
                aria-label="Instagram"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/company/aniversestudio"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/aniversestudio"
                aria-label="GitHub"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-6">
              Send Us A Message
            </h2>

            {submitStatus === "success" && (
              <div className="bg-green-900 text-green-200 p-4 rounded mb-6">
                Thank you for reaching out! We'll get back to you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-900 text-red-200 p-4 rounded mb-6">
                There was a problem submitting your form. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select a subject</option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="general-question">General Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="career">Career at AniverseStudio</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
