import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Server, CloudCog, Terminal, BrainCircuit, ExternalLink, Shield, Loader2, LineChart } from 'lucide-react';
import CourseModal from './CourseModal';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  featured?: boolean;
  bgImage: string;
  price: {
    original: number;
    discounted: number;
  };
  highlights: string[];
  prerequisites: string[];
  outcomes: string[];
}

const initialCourses: Course[] = [
  {
    id: 1,
    title: "Java Full Stack",
    description: "Master Spring Boot, Microservices, React & MongoDB",
    icon: <Code className="h-10 w-10 text-blue-700" />,
    duration: "5 Months",
    level: "Beginner to Advanced",
    featured: true,
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    price: {
      original: 45000,
      discounted: 35000
    },
    highlights: [
      "Comprehensive Java fundamentals and advanced concepts",
      "Spring Boot and Microservices architecture",
      "React.js for frontend development",
      "MongoDB database integration",
      "Real-world project implementation"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web technologies",
      "Computer with minimum 8GB RAM"
    ],
    outcomes: [
      "Build end-to-end web applications",
      "Implement microservices architecture",
      "Create responsive user interfaces",
      "Deploy applications to cloud platforms",
      "Work with databases and APIs"
    ]
  },
  {
    id: 2,
    title: "Python Full Stack",
    description: "Django, Flask, React & PostgreSQL with real projects",
    icon: <Terminal className="h-10 w-10 text-blue-700" />,
    duration: "4 Months",
    level: "Beginner to Advanced",
    featured: true,
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    price: {
      original: 40000,
      discounted: 32000
    },
    highlights: [
      "Python programming fundamentals",
      "Django and Flask frameworks",
      "Database design with PostgreSQL",
      "API development and integration",
      "Frontend development with React"
    ],
    prerequisites: [
      "Basic programming concepts",
      "HTML and CSS knowledge",
      "Problem-solving skills"
    ],
    outcomes: [
      "Create full-stack web applications",
      "Design and implement databases",
      "Build RESTful APIs",
      "Develop responsive frontends",
      "Deploy applications to production"
    ]
  },
  {
    id: 3,
    title: "MERN Stack",
    description: "MongoDB, Express.js, React.js & Node.js",
    icon: <Server className="h-10 w-10 text-blue-700" />,
    duration: "4 Months",
    level: "Intermediate",
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    price: {
      original: 35000,
      discounted: 28000
    },
    highlights: [
      "JavaScript/TypeScript fundamentals",
      "Node.js and Express.js backend",
      "React.js frontend development",
      "MongoDB database operations",
      "Full-stack project development"
    ],
    prerequisites: [
      "JavaScript fundamentals",
      "Basic web development knowledge",
      "Understanding of APIs"
    ],
    outcomes: [
      "Build modern web applications",
      "Implement authentication and authorization",
      "Create responsive user interfaces",
      "Work with NoSQL databases",
      "Deploy full-stack applications"
    ]
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Excel, Power BI & SQL for Business Intelligence",
    icon: <LineChart className="h-10 w-10 text-blue-700" />,
    duration: "3 Months",
    level: "All Levels",
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    price: {
      original: 30000,
      discounted: 25000
    },
    highlights: [
      "Advanced Excel techniques",
      "Power BI dashboard creation",
      "SQL database querying",
      "Data visualization",
      "Business reporting"
    ],
    prerequisites: [
      "Basic Excel knowledge",
      "Analytical mindset",
      "Basic math understanding"
    ],
    outcomes: [
      "Create interactive dashboards",
      "Analyze complex datasets",
      "Write efficient SQL queries",
      "Generate business insights",
      "Automate reporting processes"
    ]
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Network Security, Ethical Hacking & Security Operations",
    icon: <Shield className="h-10 w-10 text-blue-700" />,
    duration: "4 Months",
    level: "Intermediate",
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    price: {
      original: 45000,
      discounted: 36000
    },
    highlights: [
      "Network security fundamentals",
      "Ethical hacking techniques",
      "Security tools and frameworks",
      "Incident response",
      "Security operations"
    ],
    prerequisites: [
      "Networking fundamentals",
      "Basic Linux knowledge",
      "Understanding of web technologies"
    ],
    outcomes: [
      "Implement security measures",
      "Conduct security assessments",
      "Handle security incidents",
      "Use security tools effectively",
      "Prepare for security certifications"
    ]
  },
  {
    id: 6,
    title: "Data Science",
    description: "Python, Machine Learning & Data Visualization",
    icon: <BrainCircuit className="h-10 w-10 text-blue-700" />,
    duration: "6 Months",
    level: "Intermediate to Advanced",
    bgImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    price: {
      original: 50000,
      discounted: 40000
    },
    highlights: [
      "Python for data science",
      "Statistical analysis",
      "Machine learning algorithms",
      "Deep learning fundamentals",
      "Data visualization"
    ],
    prerequisites: [
      "Basic Python programming",
      "Mathematics and statistics",
      "Analytical thinking"
    ],
    outcomes: [
      "Analyze complex datasets",
      "Build machine learning models",
      "Create data visualizations",
      "Deploy ML models",
      "Make data-driven decisions"
    ]
  },
];

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses.slice(0, 3));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const currentLength = courses.length;
    const nextCourses = initialCourses.slice(currentLength, currentLength + 3);
    
    if (nextCourses.length > 0) {
      setCourses(prev => [...prev, ...nextCourses]);
    }
    if (currentLength + nextCourses.length >= initialCourses.length) {
      setHasMore(false);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleBookCounseling = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const firstInput = contactSection.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trending Courses
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our industry-relevant courses are designed by experts to help you become job-ready with in-demand skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative ${
                course.featured ? 'border-t-4 border-blue-700' : ''
              }`}
            >
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `url(${course.bgImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center right 1rem'
                }}
              />
              
              <div className="p-8 relative z-10">
                <div className="mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-blue-700">₹{course.price.discounted.toLocaleString()}</span>
                    <span className="text-lg text-gray-400 line-through">₹{course.price.original.toLocaleString()}</span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(((course.price.original - course.price.discounted) / course.price.original) * 100)}% OFF
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">*GST applicable</p>
                </div>

                <button 
                  onClick={() => handleViewDetails(course)}
                  className="inline-flex items-center px-6 py-2.5 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300 group"
                  aria-label={`View details for ${course.title} course`}
                >
                  <span>Explore Course</span>
                  <ExternalLink className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div ref={loadMoreRef} className="mt-12 text-center">
          {loading ? (
            <div className="flex items-center justify-center gap-2 text-blue-700">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading more courses...</span>
            </div>
          ) : hasMore ? (
            <button 
              onClick={loadMore}
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-full font-medium transition duration-300"
            >
              View More Courses
            </button>
          ) : (
            <button 
              onClick={handleBookCounseling}
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-medium transition duration-300"
            >
              Book Free Counseling
            </button>
          )}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default Courses;