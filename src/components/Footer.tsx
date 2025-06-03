
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Webellion Technology</h3>
            <p className="text-blue-200 mb-4">
              Designed. Developed. Deployed.
            </p>
            <p className="text-blue-200">
              We specialize in building your next website from the ground up — and the best part? It's completely free!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-blue-200 hover:text-white transition-colors">
                  Policies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-blue-200">webelliontechnology@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © Webellion Technology 2025. All rights reserved.
          </p>
          <div className="mt-2">
            <Link to="/policies" className="text-blue-200 hover:text-white transition-colors mr-4">
              Policies
            </Link>
            <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
