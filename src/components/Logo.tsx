import React from 'react';
import { GraduationCap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <GraduationCap className="h-8 w-8 text-[#FF6B38] -rotate-12" />
      <div className="ml-2">
        <span className="text-xl font-bold text-[#1B3C8D]">Sabik</span>
        <span className="text-xl font-bold text-[#FF6B38]">Academy</span>
      </div>
    </div>
  );
};

export default Logo;