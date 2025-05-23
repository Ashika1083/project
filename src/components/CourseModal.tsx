import React from 'react';
import { X } from 'lucide-react';

interface CourseDetails {
  title: string;
  description: string;
  highlights: string[];
  duration: string;
  prerequisites: string[];
  outcomes: string[];
  price: {
    original: number;
    discounted: number;
  };
}

interface CourseModalProps {
  course: CourseDetails;
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleEnroll = () => {
    onClose();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    const courseSelect = document.getElementById('course') as HTMLSelectElement;
    if (courseSelect) {
      courseSelect.value = course.title.toLowerCase().replace(/ /g, '-');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div 
        className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        <div className="p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          <h2 id="course-modal-title" className="text-2xl font-bold text-gray-900 mb-4">
            {course.title}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {course.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {course.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {course.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-700">₹{course.price.discounted.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{course.price.original.toLocaleString()}</span>
                <span className="text-sm text-green-600 font-medium">
                  {Math.round(((course.price.original - course.price.discounted) / course.price.original) * 100)}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500">Duration: {course.duration}</p>
            </div>
            <button 
              onClick={handleEnroll}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition duration-300"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;