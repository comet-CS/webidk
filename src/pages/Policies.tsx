
import React from 'react';
import { Shield, Mail } from 'lucide-react';

const Policies = () => {
  const policies = [
    {
      number: 1,
      text: "All websites produced are completely free and may be used for commercial and non-commercial projects."
    },
    {
      number: 2,
      text: "Exceptions to the above policy are if you wish to have a custom domain name or server side and/or backend code - The servers and/or domain names will need to be purchased separately."
    },
    {
      number: 3,
      text: "As a company that doesn't charge for service we reserve the right to approve or deny anyone service."
    },
    {
      number: 4,
      text: "All communication will be done by email or discord for voice calls."
    },
    {
      number: 5,
      text: "If you have any queries or concerns reach out via our email - webelliontechnology@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <Shield size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Policies</h1>
            <p className="text-xl text-blue-100">
              Our terms of service and guidelines for working together
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Webellion Technology</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Policies List */}
        <div className="space-y-6 mb-12">
          {policies.map((policy) => (
            <div
              key={policy.number}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">{policy.number}</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{policy.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-3">
              <Mail className="text-blue-600" size={24} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Questions About Our Policies?
          </h3>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about our policies, 
            please don't hesitate to reach out to us.
          </p>
          <a
            href="mailto:webelliontechnology@gmail.com"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-scale"
          >
            <Mail className="mr-2" size={20} />
            Contact Us
          </a>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policies;
