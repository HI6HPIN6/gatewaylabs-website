
import React from "react";
import { Circle, Eye } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative h-8 w-8">
        <Circle className="h-8 w-8 text-splat-darkGreen fill-splat-lightGreen/30 stroke-2" />
        <Eye className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-splat-darkGreen stroke-[2.5px]" />
      </div>
      
      {/* Logo Text */}
      <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-splat-darkGreen to-splat-vividGreen text-transparent bg-clip-text">
        Gateway Labs
      </span>
    </div>
  );
};

export default Logo;
