
import React from "react";
import { Circle } from "lucide-react";

interface IconLogoProps {
  className?: string;
  size?: number;
}

const IconLogo: React.FC<IconLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <Circle size={size} className="text-splat-darkGreen fill-splat-darkGreen" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white w-1/2 h-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default IconLogo;
