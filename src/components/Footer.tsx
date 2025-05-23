import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 mb-6">
              Leading software training institute providing industry-relevant courses with placement assistance.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Courses" />
              <FooterLink href="#" label="Placements" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="FAQs" />
              <FooterLink href="#" label="Contact Us" />
            </ul>
          </div>
          
          {/* Column 3 - Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Java Full Stack" />
              <FooterLink href="#" label="Python Full Stack" />
              <FooterLink href="#" label="MERN Stack" />
              <FooterLink href="#" label="Data Analytics" />
              <FooterLink href="#" label="DevOps" />
              <FooterLink href="#" label="Data Science" />
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Ameerpet, Nilgiri Block, 2nd Floor
                  Room No #201, Hyderabad, 500016.
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 9618802666  </span>
                <span className="text-gray-400">Instagram: @SabikAcademy</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">sabikacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SabikAcademy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Refund Policy</a>
            </div>
          </div>
          
          {/* Credits Section */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <span className="text-blue-500 font-medium">Shaik Rayhan</span>
              {' '} | Contact: <a href="tel:+918978432213" className="text-blue-500 hover:text-blue-400">+91 8978432213</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="bg-gray-800 hover:bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  </li>
);

export default Footer;