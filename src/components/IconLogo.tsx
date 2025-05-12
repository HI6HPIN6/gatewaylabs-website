
import React from "react";
import { Circle, Eye } from "lucide-react";

interface IconLogoProps {
  className?: string;
  size?: number;
}

const IconLogo: React.FC<IconLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <div className={`relative ${className}`}>
      <Circle 
        size={size} 
        className="text-splat-darkGreen fill-splat-lightGreen/30 stroke-2" 
      />
      <Eye 
        size={size * 0.6} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-splat-darkGreen stroke-[2.5px]" 
      />
    </div>
  );
};

export default IconLogo;
