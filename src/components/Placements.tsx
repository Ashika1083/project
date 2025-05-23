import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';

interface Statistic {
  id: number;
  value: string;
  label: string;
}

interface PlacementCard {
  id: number;
  name: string;
  role: string;
  company: string;
  salary: string;
  image: string;
}

const statistics: Statistic[] = [
  { id: 1, value: "5000+", label: "Students Trained" },
  { id: 2, value: "85%", label: "Placement Rate" },
  { id: 3, value: "200+", label: "Hiring Partners" },
  { id: 4, value: "₹8.5 LPA", label: "Average Package" }
];

const placements: PlacementCard[] = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Software Engineer",
    company: "Google",
    salary: "₹18 LPA",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Kumar Pulijala",
    role: "Full Stack Developer",
    company: "Infosys",
    salary: "₹16 LPA",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Rajesh Patel",
    role: "DevOps Engineer",
    company: "Amazon",
    salary: "₹14 LPA",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Data Scientist",
    company: "IBM",
    salary: "₹12 LPA",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const companies = [
  "Google", "Microsoft", "Amazon", "IBM", "Infosys", 
  "TCS", "Wipro", "Accenture", "Adobe", "Oracle"
];

const Placements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Placement Success
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our students are working with top companies worldwide. Join us to kickstart your career.
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-blue-700 text-white rounded-lg p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Placement Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Recent Placements</h3>
            <a 
              href="#" 
              className="flex items-center text-blue-700 hover:text-blue-800 font-medium"
            >
              View All Placements
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement) => (
              <div 
                key={placement.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={placement.image} 
                    alt={placement.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{placement.name}</h4>
                  <p className="text-gray-700 mb-3">{placement.role}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-medium">{placement.company}</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {placement.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partner Companies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Hiring Partners</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="bg-gray-100 px-6 py-3 rounded-md"
              >
                <span className="text-gray-800 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;