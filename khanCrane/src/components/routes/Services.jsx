import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import faranaCrane from "../pages/faranaCrane.jpg";
import forkliftCrane from "../pages/forkLift.webp";
import hydraCrane from "../pages/hydraCrane2.webp";

const services = [
  {
    title: "Farana Crane",
    image: faranaCrane,
    description: "Ideal for heavy lifting and loading tasks. Perfect for industrial and construction sites.",
  },
  {
    title: "Forklift Crane",
    image: forkliftCrane,
    description: "Designed for precision and efficiency, suitable for warehouses and logistics.",
  },
  {
    title: "Hydra Crane",
    image: hydraCrane,
    description: "Versatile and powerful, ideal for construction and infrastructure projects.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen w-full text-white bg-gray-900">
      {/* Header Section */}
      <div
        className="h-96 flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${faranaCrane})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold">OUR SERVICES</h1>
          <p className="text-lg mt-4 max-w-2xl px-4">
            We provide a wide range of crane services to meet your lifting and loading needs. From industrial projects to logistics, we have the right crane for every job.
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white text-yellow-500 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Need a Crane? Contact Us Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-lg"
        >
          We offer the best crane services at affordable prices.
        </motion.p>
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-500 text-white px-10 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
        >
          Get a Quote
        </motion.button>
      </div>
    </div>
  );
};

export default Services;