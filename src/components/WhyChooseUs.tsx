import React from 'react';
import { Users, Award, Briefcase, HeartHandshake, Clock, GraduationCap } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Experienced Trainers",
    description: "Learn from industry experts with 10+ years of experience",
    icon: <Users className="h-10 w-10 text-blue-700" />
  },
  {
    id: 2,
    title: "Industry Recognition",
    description: "Our certifications are recognized by top tech companies",
    icon: <Award className="h-10 w-10 text-blue-700" />
  },
  {
    id: 3,
    title: "Placement Assistance",
    description: "100% placement support with interview preparation",
    icon: <Briefcase className="h-10 w-10 text-blue-700" />
  },
  {
    id: 4,
    title: "Live Projects",
    description: "Work on real-world projects with mentor guidance",
    icon: <HeartHandshake className="h-10 w-10 text-blue-700" />
  },
  {
    id: 5,
    title: "Flexible Learning",
    description: "Choose from weekend, weekday, or online classes",
    icon: <Clock className="h-10 w-10 text-blue-700" />
  },
  {
    id: 6,
    title: "Lifetime Access",
    description: "Get lifetime access to course materials and updates",
    icon: <GraduationCap className="h-10 w-10 text-blue-700" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Sabik Academy
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best learning experience with industry-relevant curriculum and expert guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-50/80 backdrop-blur-sm hover:bg-blue-50/80 rounded-2xl p-8 transition-colors duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to start your tech journey?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Enroll now and get a free career counseling session with our experts
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-full font-medium transition duration-300">
            Book Free Counseling
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;