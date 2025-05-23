import React, { useState, useEffect } from 'react';
import { X, Tag } from 'lucide-react';

const PromotionalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsVisible(false)}
      ></div>
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl w-full max-w-md p-6 shadow-xl transform transition-all">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-4 inline-block">
            <Tag className="h-12 w-12 text-blue-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Special Online Offer!
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Register for any course online and get
          </p>
          <p className="text-3xl font-bold text-blue-700 mb-4">
            10% OFF
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Limited time offer. Terms and conditions apply.
          </p>
          <button 
            onClick={() => {
              setIsVisible(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full font-medium transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPopup;