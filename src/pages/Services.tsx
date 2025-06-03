
import React from 'react';
import { Palette, Code, Rocket, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive web development solutions for your business
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Details */}
        <div className="space-y-16">
          {/* Designed */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <Palette className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Designed</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We offer free designs for all our clients. Our design process focuses on creating modern, 
              user-friendly interfaces that reflect your brand identity and engage your audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Responsive Design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Modern UI/UX</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Brand Integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Mobile-First Approach</span>
              </div>
            </div>
          </div>

          {/* Developed */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Developed</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We also code all our clients websites for FREE. Using modern web technologies and best practices, 
              we ensure your website is fast, secure, and maintainable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Clean, Efficient Code</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">SEO Optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Fast Loading Times</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Cross-Browser Compatible</span>
              </div>
            </div>
          </div>

          {/* Deployed */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                <Rocket className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Deployed</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We deploy static web pages for free. All custom domains must be bought by the client before hand. 
              All websites with server side code or databases also require the client to purchase their own hosting. 
              We offer support with hosting in non static web pages but we give clients full control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Free Static Hosting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">SSL Certificate Included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Global CDN</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">24/7 Uptime Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Before You Request</h3>
          <p className="text-lg text-gray-700">
            Please review our{' '}
            <a href="/policies" className="text-blue-600 hover:text-blue-800 underline">
              policies
            </a>{' '}
            before requesting a site. We want to ensure a smooth process for both you and our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
