
import React from 'react';
import { Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
            <p className="text-xl text-blue-100">
              Showcasing our latest projects and achievements
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Empty State Message */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our portfolio is constantly growing. Check back soon to see more of our work, 
            or get in touch to discuss your next project.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:webelliontechnology@gmail.com"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-scale"
            >
              <Mail className="mr-2" size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
