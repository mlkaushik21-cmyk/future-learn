import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-black text-xl italic shadow-md">FL</div>
              <span className="font-bold text-2xl tracking-tight">Future Learn</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">India's most trusted education platform.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Email: support@futurelearn.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Future Learn Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
