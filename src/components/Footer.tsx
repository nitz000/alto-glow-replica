
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-gray-900 rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">ALTO HOMES</span>
            </div>
            <p className="text-gray-300 mb-4">
              Elevating homes with premium custom glass, railings, and mirror installations throughout the Greater Toronto Area.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <MessageCircle className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Custom Glass Railings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mirror Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glass Partitions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shower Enclosures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>2345 Fairview St</p>
              <p>Mississauga, ON</p>
              <p>(416) 555-4854</p>
              <p>info@altohomes.ca</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Alto Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
