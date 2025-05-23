import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Launch Your Tech Career",
    subtitle: "Real-time industry projects with 100% placement assistance",
    cta: "Explore Courses",
    image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
  },
  {
    id: 2,
    title: "Master Full Stack Development",
    subtitle: "Learn from industry experts with hands-on projects",
    cta: "View Curriculum",
    image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
  },
  {
    id: 3,
    title: "Cloud & DevOps Training",
    subtitle: "Become cloud-certified with our specialized programs",
    cta: "Register Now",
    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const firstInput = contactSection.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    }
  };

  const handleViewDemo = () => {
    window.open('https://youtu.be/IaCNYSpTFlE?si=A2KfNB48-BC2CUO5', '_blank');
  };

  return (
    <section className="relative h-[600px] lg:h-[650px] overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-5000 ease-out"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-in-out'
            }}
          ></div>
          
          <div className="relative h-full z-20 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white opacity-90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={slide.cta === "Explore Courses" ? handleExplore : handleRegister}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-full font-medium transition duration-300"
                  >
                    {slide.cta}
                  </button>
                  <button 
                    onClick={handleViewDemo}
                    className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-full font-medium transition duration-300"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;