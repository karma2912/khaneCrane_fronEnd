import React from 'react';
import faranaCrane from '../pages/faranaCrane.jpg'; // Replace with your image paths
import forkliftCrane from '../pages/forkLift.webp';
import hydraCrane from '../pages/hydraCrane2.webp';

const Services = () => {
  return (
      <div className="min-h-screen w-full text-white" style={{ backgroundColor: "#1b273a" }}>
        {/* Header Section */}
        <div className="h-96 w-full flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${faranaCrane})` }}>
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">OUR SERVICES</h1>
            <p className="text-lg mt-4 max-w-2xl px-4">
              We provide a wide range of crane services to meet your lifting and loading needs. From industrial projects to logistics, we have the right crane for every job.
            </p>
          </div>
        </div>
  
        {/* Services Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Farana Crane Service */}
            <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={faranaCrane} alt="Farana Crane" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Farana Crane</h2>
                <p className="text-gray-600">
                  Ideal for heavy lifting and loading tasks. Our Farana Crane is perfect for industrial and construction sites.
                </p>
                <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
  
            {/* Forklift Crane Service */}
            <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={forkliftCrane} alt="Forklift Crane" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Forklift Crane</h2>
                <p className="text-gray-600">
                  Designed for precision and efficiency, our Forklift Crane is suitable for warehouses and logistics.
                </p>
                <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
  
            {/* Hydra Crane Service */}
            <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={hydraCrane} alt="Hydra Crane" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Hydra Crane</h2>
                <p className="text-gray-600">
                  Our Hydra Crane is versatile and powerful, ideal for construction and infrastructure projects.
                </p>
                <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call to Action Section */}
        <div className="bg-white text-yellow-500 py-16 text-center">
          <h2 className="text-4xl font-bold">Need a Crane? Contact Us Today!</h2>
          <p className="mt-4 text-lg">We offer the best crane services at affordable prices.</p>
          <button className="mt-8 bg-yellow-500 text-white px-10 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold">
            Get a Quote
          </button>
        </div>
      </div>
    );
};

export default Services;
