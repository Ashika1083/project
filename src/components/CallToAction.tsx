import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Free career counseling session",
  "Customized learning path",
  "Access to exclusive webinars",
  "One-on-one mentorship"
];

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Tech Career Journey Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-xl">
              Register now for a free demo class and experience our teaching methodology firsthand
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 flex-shrink-0 bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-5/12 w-full">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Register for Demo Class</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" 
                    placeholder="Enter your name" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" 
                    placeholder="Enter your phone number" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course Interested In</label>
                  <select 
                    id="course" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900" 
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="java">Java Full Stack</option>
                    <option value="python">Python Full Stack</option>
                    <option value="mern">MERN Stack</option>
                    <option value="aws">AWS Cloud</option>
                    <option value="devops">DevOps</option>
                    <option value="data-science">Data Science</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full font-medium transition duration-300"
                >
                  Schedule Free Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;