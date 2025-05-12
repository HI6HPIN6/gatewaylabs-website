
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src="/lovable-uploads/2cc389d8-db98-45fd-bb52-fb8f6af0949e.png" 
        alt="Gateway Labs Logo" 
        className="h-10 md:h-12"
      />
    </div>
  );
};

export default Logo;
