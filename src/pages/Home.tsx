
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Rocket, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Webellion Technology
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Designed. Developed. Deployed.
            </p>
            <div className="bg-blue-500 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-4xl mb-8">
              <p className="text-lg md:text-xl">
                Hi I'm a young developer ready to bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Webellion Technology!
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We specialize in building your next website from the ground up — and the best part? It's completely free! 
              Webellion is run by a young, passionate developer dedicated to giving you the best value you'll find. 
              Our goal is to help make your dream website a reality.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                If what you have read interests you go to our{' '}
                <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Contacts Page
                </Link>{' '}
                and send us an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow hover-scale">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Palette className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Designed</h3>
              <p className="text-gray-600">
                We offer free designs for all our clients. Modern, responsive, and tailored to your brand.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow hover-scale">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Developed</h3>
              <p className="text-gray-600">
                We also code all our clients websites for FREE. Clean, efficient, and built to last.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow hover-scale">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Rocket className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deployed</h3>
              <p className="text-gray-600">
                We deploy static web pages for free. Get your website online and accessible to the world.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-scale"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with us today and let's bring your vision to life!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors hover-scale"
          >
            Contact Us Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
